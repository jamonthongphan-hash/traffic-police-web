/**
 * ============================================================
 * Traffic Police Handbook — Google Drive Uploader
 * ============================================================
 * วิธีใช้:
 * 1. ไปที่ https://script.google.com → New project
 * 2. วางโค้ดนี้ทั้งหมดแทน Code.gs เดิม
 * 3. กำหนด ROOT_FOLDER_NAME (ถ้าต้องการเปลี่ยนชื่อ)
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy Web app URL ไปใส่ใน admin.html
 * ============================================================
 */

// ID ของโฟลเดอร์หลักใน Google Drive ที่มีอยู่แล้ว
// (จาก https://drive.google.com/drive/folders/1I7ptnMQAee8wE1YfsCI_oqeOS21_sAG_)
const ROOT_FOLDER_ID = '1I7ptnMQAee8wE1YfsCI_oqeOS21_sAG_';

// ============================================================
// รับไฟล์และบันทึกลง Google Drive
// ============================================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // decode base64 → bytes
    const fileBytes = Utilities.base64Decode(data.fileData);
    const blob = Utilities.newBlob(fileBytes, data.mimeType, data.fileName);

    // เปิดโฟลเดอร์หลักที่มีอยู่แล้วใน Google Drive
    const rootFolder = DriveApp.getFolderById(ROOT_FOLDER_ID);

    // หาหรือสร้างโฟลเดอร์ย่อยตามหมวดหมู่อัตโนมัติ
    const catFolder = getOrCreateFolder(rootFolder, data.catTitle || 'ทั่วไป');

    // บันทึกไฟล์
    const file = catFolder.createFile(blob);

    // ให้ทุกคนที่มี link ดูได้
    file.setSharing(
      DriveApp.Access.ANYONE_WITH_LINK,
      DriveApp.Permission.VIEW
    );

    const fileId = file.getId();

    return buildResponse({
      success:    true,
      fileId:     fileId,
      fileName:   data.fileName,
      catTitle:   data.catTitle,
      viewUrl:    'https://drive.google.com/file/d/' + fileId + '/view',
      previewUrl: 'https://drive.google.com/file/d/' + fileId + '/preview'
    });

  } catch (err) {
    return buildResponse({ success: false, error: err.message });
  }
}

// ============================================================
// ทดสอบว่า script ทำงานได้
// ============================================================
function doGet(e) {
  return buildResponse({ status: 'Traffic Police Handbook Uploader — Ready ✅' });
}

// ============================================================
// helper: หาโฟลเดอร์ย่อยตามชื่อในโฟลเดอร์ parent
//         ถ้าไม่มีให้สร้างใหม่อัตโนมัติ
// ============================================================
function getOrCreateFolder(parent, name) {
  const iter = parent.getFoldersByName(name);
  if (iter.hasNext()) return iter.next();
  return parent.createFolder(name);
}

// ============================================================
// helper: สร้าง JSON response พร้อม CORS header
// ============================================================
function buildResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
