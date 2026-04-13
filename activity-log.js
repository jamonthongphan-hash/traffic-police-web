import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp }
  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import './firebase-config.js';

function db() { return getFirestore(getApp()); }

/**
 * บันทึก log การกระทำของ admin
 * @param {object} profile  - currentUserProfile
 * @param {string} action   - 'add' | 'edit' | 'delete'
 * @param {string} type     - 'category' | 'section' | 'doc' | 'faq'
 * @param {string} name     - ชื่อสิ่งที่ถูกกระทำ
 * @param {string} [detail] - รายละเอียดเพิ่มเติม
 */
export async function logActivity(profile, action, type, name, detail = '') {
  if (!profile) return;
  try {
    await addDoc(collection(db(), 'activityLogs'), {
      timestamp: serverTimestamp(),
      uid:    profile.uid    || '',
      name:   profile.name   || '',
      rank:   profile.rank   || '',
      role:   profile.role   || '',
      action,   // add | edit | delete
      type,     // category | section | doc | faq
      target:   name,
      detail
    });
  } catch (e) {
    console.warn('logActivity failed:', e.message);
  }
}

/**
 * ดึง log ล่าสุด (super_admin only)
 * @param {number} n - จำนวน log ที่ต้องการ (default 200)
 */
export async function getActivityLogs(n = 200) {
  const q = query(collection(db(), 'activityLogs'), orderBy('timestamp', 'desc'), limit(n));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
