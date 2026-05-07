/**
 * storage-upload.js
 * อัปโหลด PDF ไป Firebase Storage และคืน download URL
 */
import { storage } from './firebase-config.js';
import {
  ref, uploadBytesResumable, getDownloadURL, deleteObject
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js';

/**
 * อัปโหลดไฟล์ PDF
 * @param {File}     file        - ไฟล์ที่เลือก
 * @param {string}   catId       - id หมวดหมู่ (สำหรับ path)
 * @param {Function} onProgress  - callback(percent) แสดงความคืบหน้า
 * @returns {Promise<string>}    - download URL
 */
export function uploadPDF(file, catId, onProgress) {
  return new Promise((resolve, reject) => {
    // ตรวจสอบประเภทไฟล์
    const allowed = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
    if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|doc|docx|ppt|pptx)$/i)) {
      reject(new Error('รองรับเฉพาะไฟล์ PDF, Word, PowerPoint เท่านั้น'));
      return;
    }
    // ตรวจสอบขนาด (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      reject(new Error('ไฟล์ใหญ่เกิน 50MB'));
      return;
    }

    // สร้าง path: documents/{catId}/{timestamp}_{filename}
    const safeName = file.name.replace(/[^a-zA-Z0-9ก-๙._-]/g, '_');
    const path = `documents/${catId}/${Date.now()}_${safeName}`;
    const storageRef = ref(storage, path);

    const task = uploadBytesResumable(storageRef, file, {
      contentType: file.type,
      contentDisposition: `inline; filename="${file.name}"`
    });

    task.on('state_changed',
      snap => {
        const pct = Math.round(snap.bytesTransferred / snap.totalBytes * 100);
        if (onProgress) onProgress(pct);
      },
      err => reject(err),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}

/**
 * ลบไฟล์จาก Storage ตาม URL
 * @param {string} url - download URL ของไฟล์ที่ต้องการลบ
 */
export async function deletePDF(url) {
  try {
    const fileRef = ref(storage, url);
    await deleteObject(fileRef);
  } catch (e) {
    console.warn('deletePDF:', e.message);
  }
}
