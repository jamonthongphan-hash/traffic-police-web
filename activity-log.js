import {
  collection, addDoc, getDocs, getDoc, setDoc, doc,
  query, orderBy, limit, serverTimestamp, deleteDoc, writeBatch
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { db } from './firebase-config.js';

// ============================================================
// 9. LOG การเข้าใช้งาน
// ============================================================

const ACTION_LABELS = {
  login:          '🔐 เข้าสู่ระบบ',
  logout:         '🚪 ออกจากระบบ',
  save_all:       '💾 บันทึกข้อมูลทั้งหมด',
  add:            '➕ เพิ่ม',
  edit:           '✏️ แก้ไข',
  delete:         '🗑️ ลบ',
};

const TYPE_LABELS = {
  category: 'หมวดหมู่',
  section:  'หมวดย่อย',
  doc:      'เอกสาร',
  faq:      'FAQ',
  system:   'ระบบ',
};

/**
 * บันทึก log การกระทำของ admin
 */
export async function logActivity(profile, action, type, name, detail = '') {
  if (!profile) return;
  try {
    await addDoc(collection(db, 'activityLogs'), {
      timestamp: serverTimestamp(),
      uid:    profile.uid    || '',
      name:   profile.name   || profile.displayName || '',
      rank:   profile.rank   || '',
      role:   profile.role   || '',
      action,
      type,
      target: name,
      detail
    });
  } catch (e) {
    console.warn('logActivity failed:', e.message);
  }
}

/**
 * ดึง log ล่าสุด
 */
export async function getActivityLogs(n = 100) {
  try {
    const q = query(
      collection(db, 'activityLogs'),
      orderBy('timestamp', 'desc'),
      limit(n)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    console.warn('getActivityLogs:', e.message);
    return [];
  }
}

/**
 * Format log entry เป็น string สำหรับแสดงผล
 */
export function formatLog(log) {
  const actionLabel = ACTION_LABELS[log.action] || log.action;
  const typeLabel   = TYPE_LABELS[log.type]     || log.type;
  const who = `${log.rank ? log.rank + ' ' : ''}${log.name}`;
  const what = log.action === 'login' || log.action === 'logout' || log.action === 'save_all'
    ? actionLabel
    : `${actionLabel}${typeLabel} "${log.target}"`;
  return { who, what, detail: log.detail };
}

// ============================================================
// 10. VERSION HISTORY
// ============================================================

const MAX_VERSIONS = 30; // เก็บไว้ 30 เวอร์ชันล่าสุด

/**
 * บันทึก snapshot ก่อน save
 */
export async function saveVersion(data, profile) {
  if (!profile || !data) return;
  try {
    // นับจำนวนเอกสารทั้งหมด
    let totalDocs = 0;
    data.forEach(c => c.sections.forEach(s => { totalDocs += s.docs.length; }));

    await addDoc(collection(db, 'versions'), {
      timestamp:  serverTimestamp(),
      savedBy:    `${profile.rank ? profile.rank + ' ' : ''}${profile.name}`,
      uid:        profile.uid || '',
      totalCats:  data.length,
      totalDocs,
      snapshot:   JSON.stringify(data)
    });

    // ล้าง version เก่าที่เกิน MAX_VERSIONS
    await pruneVersions();
  } catch(e) {
    console.warn('saveVersion failed:', e.message);
  }
}

/**
 * ดึง versions ล่าสุด
 */
export async function getVersions(n = 20) {
  try {
    const q = query(
      collection(db, 'versions'),
      orderBy('timestamp', 'desc'),
      limit(n)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    console.warn('getVersions:', e.message);
    return [];
  }
}

/**
 * กู้คืนข้อมูลจาก version
 */
export async function restoreVersion(versionId) {
  const snap = await getDoc(doc(db, 'versions', versionId));
  if (!snap.exists()) throw new Error('ไม่พบ version นี้');
  return JSON.parse(snap.data().snapshot);
}

/**
 * ลบ versions เก่าที่เกินกำหนด
 */
async function pruneVersions() {
  try {
    const q = query(
      collection(db, 'versions'),
      orderBy('timestamp', 'desc'),
      limit(MAX_VERSIONS + 10)
    );
    const snap = await getDocs(q);
    if (snap.docs.length > MAX_VERSIONS) {
      const toDelete = snap.docs.slice(MAX_VERSIONS);
      const batch = writeBatch(db);
      toDelete.forEach(d => batch.delete(d.ref));
      await batch.commit();
    }
  } catch(e) {
    console.warn('pruneVersions:', e.message);
  }
}
