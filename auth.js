// ============================================================
//  auth.js  —  ฟังก์ชันระบบ Authentication & Role Management
// ============================================================
import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, setDoc, getDoc, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ระดับสิทธิ์ทั้งหมด
export const ROLES = {
  SUPER_ADMIN:   "super_admin",   // คุณ — อนุมัติ/กำหนดระดับ
  ADMIN_LEVEL3:  "admin_level3",  // สิทธิ์เต็ม: ดู+แก้ไข+เพิ่ม+ลบ
  ADMIN_LEVEL2:  "admin_level2",  // ดู+แก้ไข+เพิ่ม/ลบข้อมูล
  ADMIN_LEVEL1:  "admin_level1",  // ดู+แก้ไขเนื้อหา
  PENDING:       "pending"        // รอการอนุมัติ
};

// สิทธิ์แต่ละระดับ
export const PERMISSIONS = {
  super_admin:  { canView: true, canEdit: true, canAdd: true, canDelete: true, canManageUsers: true },
  admin_level3: { canView: true, canEdit: true, canAdd: true, canDelete: true, canManageUsers: false },
  admin_level2: { canView: true, canEdit: true, canAdd: true, canDelete: true, canManageUsers: false },
  admin_level1: { canView: true, canEdit: true, canAdd: false, canDelete: false, canManageUsers: false },
  pending:      { canView: false, canEdit: false, canAdd: false, canDelete: false, canManageUsers: false }
};

// ชื่อแสดงระดับสิทธิ์ (ภาษาไทย)
export const ROLE_LABELS = {
  super_admin:  "Super Admin",
  admin_level3: "ผู้ดูแลระดับ 3 (สิทธิ์เต็ม)",
  admin_level2: "ผู้ดูแลระดับ 2 (เพิ่ม/แก้ไข/ลบ)",
  admin_level1: "ผู้ดูแลระดับ 1 (ดูและแก้ไข)",
  pending:      "รอการอนุมัติ"
};

// ===== สมัครสมาชิก (Register) =====
export async function registerAdmin(email, password, name, department, rank) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", cred.user.uid), {
    uid:          cred.user.uid,
    email,
    name,
    department,
    rank,
    role:         ROLES.PENDING,
    approved:     false,
    requestedAt:  serverTimestamp(),
    approvedAt:   null,
    approvedBy:   null
  });
  return cred.user;
}

// ===== เข้าสู่ระบบ (Login) =====
export async function loginAdmin(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const profile = await getUserProfile(cred.user.uid);
  if (!profile) throw new Error("ไม่พบข้อมูลผู้ใช้");
  if (profile.role === ROLES.PENDING) throw new Error("บัญชีของคุณยังรอการอนุมัติจากผู้ดูแลระบบ");
  return { user: cred.user, profile };
}

// ===== ออกจากระบบ =====
export async function logoutAdmin() {
  await signOut(auth);
}

// ===== ดึงข้อมูลโปรไฟล์ =====
export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ===== ตรวจสอบสถานะ Login =====
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const profile = await getUserProfile(user.uid);
      callback(user, profile);
    } else {
      callback(null, null);
    }
  });
}

// ===== ตรวจสอบสิทธิ์ =====
export function hasPermission(role, permission) {
  return PERMISSIONS[role]?.[permission] ?? false;
}
