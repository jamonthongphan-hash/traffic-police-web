// ============================================================
//  visitor-counter.js  —  นับและแสดงจำนวนผู้เข้าชมเว็บ
// ============================================================
import { db } from "./firebase-config.js";
import {
  doc, getDoc, setDoc, updateDoc, increment, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const COUNTER_DOC = doc(db, "visitors", "counter");
const SESSION_KEY = "traffic_visited";

// เพิ่มจำนวนผู้เข้าชม (นับ 1 ครั้งต่อ session)
export async function trackVisit() {
  if (sessionStorage.getItem(SESSION_KEY)) return; // นับแล้วใน session นี้
  sessionStorage.setItem(SESSION_KEY, "1");
  try {
    const snap = await getDoc(COUNTER_DOC);
    if (snap.exists()) {
      await updateDoc(COUNTER_DOC, { total: increment(1), lastUpdated: new Date() });
    } else {
      await setDoc(COUNTER_DOC, { total: 1, lastUpdated: new Date() });
    }
  } catch (e) {
    console.warn("visitor-counter: ไม่สามารถบันทึกได้", e);
  }
}

// อ่านจำนวนผู้เข้าชมปัจจุบัน (one-time)
export async function getVisitorCount() {
  try {
    const snap = await getDoc(COUNTER_DOC);
    return snap.exists() ? snap.data().total : 0;
  } catch (e) {
    return 0;
  }
}

// subscribe realtime — เรียก callback ทุกครั้งที่ค่าเปลี่ยน
export function subscribeVisitorCount(callback) {
  return onSnapshot(COUNTER_DOC, (snap) => {
    callback(snap.exists() ? snap.data().total : 0);
  });
}
