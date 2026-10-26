/**
 * data-store.js
 * จัดการข้อมูลหมวดหมู่ใน Firestore
 * ทุก browser อ่าน/เขียนจากแหล่งเดียวกัน
 */
import { db } from './firebase-config.js';
import {
  doc, getDoc, setDoc, onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const CAT_REF      = () => doc(db, 'siteData', 'categories');
const SPOTLIGHT_REF = () => doc(db, 'siteData', 'config');

/** บันทึก categories ลง Firestore (admin only) */
export async function saveCategories(data) {
  await setDoc(CAT_REF(), {
    list: data,
    updatedAt: new Date().toISOString()
  });
}

/** โหลด categories จาก Firestore ครั้งเดียว */
export async function loadCategories() {
  const snap = await getDoc(CAT_REF());
  if (snap.exists() && Array.isArray(snap.data().list)) {
    return snap.data().list;
  }
  return null; // null = ให้ fallback ไปใช้ CATEGORIES จาก data.js
}

/** subscribe real-time — ทุกครั้งที่ admin บันทึก callback จะถูกเรียก */
export function subscribeCategories(callback) {
  return onSnapshot(CAT_REF(), snap => {
    if (snap.exists() && Array.isArray(snap.data().list)) {
      callback(snap.data().list);
    }
  });
}

/** บันทึก spotlight catIds ลง Firestore (admin only) */
export async function saveSpotlight(catIds) {
  await setDoc(SPOTLIGHT_REF(), { spotlightCats: catIds }, { merge: true });
}

/** subscribe spotlight real-time */
export function subscribeSpotlight(callback) {
  return onSnapshot(SPOTLIGHT_REF(), snap => {
    const ids = snap.exists() ? (snap.data().spotlightCats || []) : [];
    callback(ids);
  });
}
