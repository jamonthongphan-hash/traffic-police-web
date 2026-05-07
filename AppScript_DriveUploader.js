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

// ชื่อโฟลเดอร์หลักใน Google Drive
const ROOT_FOLDER_NAME = 'คู่มือตำรวจจราจร';

// ============================================================
// รับไฟล์และบันทึกลง Google Drive
// ============================================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // decode base64 → bytes
    const fileBytes = Utilities.base64Decode(data.fileData);
    const blob = Utilities.newBlob(fileBytes, data.mimeType, data.fileName);

    // หาหรือสร้างโฟลเดอร์หลัก
    const rootFolder = getOrCreateFolder(null, ROOT_FOLDER_NAME);

    // หาหรือสร้างโฟลเดอร์ย่อยตามหมวดหมู่
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
// helper: หาโฟลเดอร์ตามชื่อ ถ้าไม่มีให้สร้างใหม่
// ============================================================
function getOrCreateFolder(parent, name) {
  const iter = parent
    ? parent.getFoldersByName(name)
    : DriveApp.getFoldersByName(name);

  if (iter.hasNext()) return iter.next();

  return parent
    ? parent.createFolder(name)
    : DriveApp.createFolder(name);
}

// ============================================================
// helper: สร้าง JSON response พร้อม CORS header
// ============================================================
function buildResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
