/**
 * gdrive-upload.js
 * อัปโหลดไฟล์ไป Google Drive ผ่าน Google Apps Script
 * โฟลเดอร์จะถูกสร้างอัตโนมัติตามชื่อหมวดหมู่
 */

// ============================================================
// ⚙️ URL ของ Apps Script Web App (hardcoded + override จาก localStorage)
// ============================================================
const DEFAULT_UPLOAD_URL = 'https://script.google.com/macros/s/AKfycby1mmYeJIasex-ptKPEFiweucHaOw-K60M8KWOFUFgA6IImttvfEYlobp7PadkA-R_3/exec';
export const APPS_SCRIPT_URL = DEFAULT_UPLOAD_URL;

/**
 * อัปโหลดไฟล์ไป Google Drive
 * @param {File}     file       - ไฟล์ที่เลือก
 * @param {string}   catTitle   - ชื่อหมวดหมู่ (ใช้เป็นชื่อโฟลเดอร์)
 * @param {Function} onProgress - callback(0-100)
 * @returns {Promise<{viewUrl, previewUrl, fileName}>}
 */
export async function uploadToGDrive(file, catTitle, onProgress) {
  const url = window._appsScriptUrl || localStorage.getItem('appsScriptUrl') || DEFAULT_UPLOAD_URL;
  if (!url) throw new Error('ยังไม่ได้ตั้งค่า Apps Script URL กรุณาติดต่อผู้ดูแลระบบ');

  // ตรวจสอบประเภทและขนาดไฟล์
  const allowedExt = /\.(pdf|doc|docx|ppt|pptx|xls|xlsx)$/i;
  if (!allowedExt.test(file.name)) {
    throw new Error('รองรับเฉพาะ PDF, Word, PowerPoint, Excel เท่านั้น');
  }
  if (file.size > 20 * 1024 * 1024) {
    throw new Error('ไฟล์ใหญ่เกิน 20MB กรุณาบีบอัดก่อนอัปโหลด');
  }

  // อ่านไฟล์เป็น base64
  if (onProgress) onProgress(10);
  const base64 = await readAsBase64(file);
  if (onProgress) onProgress(30);

  // ส่งไปที่ Apps Script
  const payload = {
    fileName: file.name,
    mimeType: file.type || 'application/octet-stream',
    fileData: base64,
    catTitle: catTitle || 'ทั่วไป'
  };

  // simulate progress ระหว่าง upload
  let fakeProgress = 30;
  const timer = setInterval(() => {
    fakeProgress = Math.min(fakeProgress + 5, 85);
    if (onProgress) onProgress(fakeProgress);
  }, 400);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    clearInterval(timer);
    if (onProgress) onProgress(95);

    const result = await res.json();
    if (!result.success) throw new Error(result.error || 'อัปโหลดไม่สำเร็จ');

    if (onProgress) onProgress(100);
    return result;

  } catch (e) {
    clearInterval(timer);
    throw new Error('เชื่อมต่อ Google Drive ไม่ได้: ' + e.message);
  }
}

// ─── helper: อ่านไฟล์เป็น base64 string ───
function readAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
