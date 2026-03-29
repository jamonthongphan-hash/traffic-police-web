# คู่มือการติดตั้ง Firebase สำหรับเว็บคู่มือตำรวจจราจร

## ขั้นตอนที่ 1 — สร้าง Firebase Project

1. ไปที่ https://console.firebase.google.com
2. คลิก **"Add project"** → ตั้งชื่อ เช่น `traffic-police-web`
3. เปิด/ปิด Google Analytics ตามต้องการ → คลิก **Create project**

---

## ขั้นตอนที่ 2 — เปิดใช้งาน Authentication

1. เมนูซ้าย → **Build → Authentication** → **Get started**
2. แท็บ **Sign-in method** → คลิก **Email/Password** → เปิดใช้งาน → **Save**

---

## ขั้นตอนที่ 3 — สร้าง Firestore Database

1. เมนูซ้าย → **Build → Firestore Database** → **Create database**
2. เลือก **Production mode** → เลือก Location (เช่น `asia-southeast1`) → **Done**
3. ไปที่แท็บ **Rules** → วางเนื้อหาจากไฟล์ `firestore.rules` ทับของเดิม → **Publish**

---

## ขั้นตอนที่ 4 — คัดลอก Firebase Config

1. **Project Settings** (ไอคอนฟันเฟือง) → แท็บ **General**
2. เลื่อนลงไปที่ **"Your apps"** → คลิก **`</>`** (Web)
3. ตั้งชื่อ App → **Register app**
4. คัดลอก `firebaseConfig` ที่ได้

---

## ขั้นตอนที่ 5 — แก้ไข firebase-config.js

เปิดไฟล์ `firebase-config.js` แล้วแทนที่ค่าด้วย config ที่ได้จาก Firebase:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy...",          // ← แทนที่ด้วยค่าจริง
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc..."
};
```

---

## ขั้นตอนที่ 6 — ตั้งตัวเองเป็น Super Admin

หลังจาก deploy แล้ว ทำตามขั้นตอนนี้ **ครั้งเดียว**:

1. ไปที่ `register.html` → สมัครด้วยอีเมลของคุณ
2. ไปที่ Firebase Console → **Firestore Database** → Collection `users`
3. หา document ที่ตรงกับ uid ของคุณ
4. แก้ไขฟิลด์ `role` เป็น `super_admin` และ `approved` เป็น `true`
5. เข้าสู่ระบบที่ `super-admin.html` — คุณจะเห็น dashboard จัดการ Admin ทันที

---

## ขั้นตอนที่ 7 — Deploy ขึ้น GitHub Pages

```bash
cd traffic-police-web
git add .
git commit -m "Add Firebase auth, visitor counter, admin registration system"
git push origin main
```

GitHub Pages จะ deploy อัตโนมัติใน 1-2 นาที

---

## โครงสร้างไฟล์ที่เพิ่มใหม่

| ไฟล์ | หน้าที่ |
|------|---------|
| `firebase-config.js` | ตั้งค่าการเชื่อมต่อ Firebase |
| `auth.js` | ระบบ Login / Register / Role |
| `visitor-counter.js` | นับจำนวนผู้เข้าชม |
| `register.html` | หน้าสมัครสมาชิก Admin |
| `super-admin.html` | Dashboard อนุมัติ/จัดการ Admin |
| `firestore.rules` | กฎความปลอดภัย Firestore |

---

## ระดับสิทธิ์ (Roles)

| Role | ดูข้อมูล | แก้ไข | เพิ่ม/ลบ | จัดการ Admin |
|------|----------|-------|----------|--------------|
| `super_admin` | ✅ | ✅ | ✅ | ✅ |
| `admin_level3` | ✅ | ✅ | ✅ | ❌ |
| `admin_level2` | ✅ | ✅ | ✅ | ❌ |
| `admin_level1` | ✅ | ✅ | ❌ | ❌ |
| `pending` | ❌ | ❌ | ❌ | ❌ |

---

## การ Flow ของระบบ

```
ผู้ใช้ใหม่ → register.html → role: pending
    ↓
Super Admin เห็นใน super-admin.html → อนุมัติ + กำหนดระดับ
    ↓
ผู้ใช้เข้าสู่ระบบได้ที่ admin.html → สิทธิ์ตามระดับที่กำหนด
```
