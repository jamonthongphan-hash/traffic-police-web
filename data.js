// ============================================================
// data.js — ฐานข้อมูลเอกสารและเนื้อหาของคู่มือตำรวจจราจร
// แก้ไขไฟล์นี้เพื่อเพิ่ม/ลบ/แก้ไขเอกสารและเนื้อหา
// ============================================================

const SITE_CONFIG = {
  title: "คู่มือตำรวจจราจร",
  subtitle: "กองบังคับการตำรวจจราจร  กองบัญชาการตำรวจนครบาล",
  description: "กฎหมาย ระเบียบ ข้อบังคับ ประกาศ คำสั่ง หนังสือสั่งการ คู่มือการปฏิบัติงาน",
  unit: "พ.ต.อ.จามร ทองพรรณ รอง ผบก.จร.",
  year: "พ.ศ. 2569",
  adminPassword: "5454"
};

const CATEGORIES = [
  {
    "color": "#1565C0",
    "sections": [
      {
        "title": "ประกาศสำนักนายกรัฐมนตรี",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1w4siD9MWjBH3zbBcdA-wg6q2Qwx4io98/view",
            "title": "กำหนดเจ้าหน้าที่ของรัฐผู้มีอำนาจปรับเป็นพินัยตาม พ.ร.บ.จราจรทางบก พ.ศ.2522 (25 ต.ค. 2566)"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1OuztJcgCHS4FgMAxeW2KN86YiALKCh2P/view?usp=sharing",
            "title": "กำหนดให้ข้าราชการตำรวจเป็นเจ้าหน้าที่รัฐผู้มีอำนาจปรับเป็นพินัย ตาม พ.ร.บ.คุ้มครองผู้ประสบภัย"
          }
        ],
        "title": "ประกาศกระทรวงการคลัง"
      },
      {
        "title": "ประกาศกรมการขนส่งทางบก",
        "docs": [
          {
            "title": "มอบอำนาจให้เจ้าพนักงานตำรวจเปรียบเทียบความผิด ตาม พ.ร.บ.รถยนต์ พ.ศ.2522 ที่มีโทษปรับสถานเดียว",
            "url": "https://drive.google.com/file/d/1VarKnEnVWPTfZkI8GSwydAb37NmrSYAP/view"
          },
          {
            "title": "มอบอำนาจเปรียบเทียบความผิดตาม พ.ร.บ.การขนส่งทางบก พ.ศ.2522 และ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1nMOOF41B2N3PFtBTlTGmUJgMrnx_54pK/view"
          }
        ]
      },
      {
        "title": "พระราชบัญญัติ (พ.ร.บ.)",
        "docs": [
          {
            "title": "พ.ร.บ.การขนส่งทางบก พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1ejpnjl5C2Cq44ZB1zd9hbR5_5Hb2QNn2/view"
          },
          {
            "url": "https://drive.google.com/file/d/1ZEpP39h3S7b9YO0ygnP04TKf9qSJpcI7/view",
            "title": "พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "พ.ร.บ.ว่าด้วยการปรับเป็นพินัย พ.ศ.2565",
            "url": "https://drive.google.com/file/d/1E64N4FOkTpV9oIacqXpzjh05twsNPpjD/view"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/148kPFD629VXMRwCYCpij5fN1RfFOmgW_/view",
            "title": "คำสั่ง ตร. ที่ 456/2566 ลง 11 ส.ค.66 เรื่อง แต่งตั้งคณะทำงานขับเคลื่อนฯ"
          },
          {
            "title": "คำสั่ง ตร. ที่ 591/2566 ลง 24 ต.ค.66 เรื่อง แนวทางการดำเนินการตาม พ.ร.บ.ว่าด้วยการปรับเป็นพินัย พ.ศ.2565",
            "url": "https://drive.google.com/file/d/1UXBRR27Eg4mxBNIdWzSp0QNrSVz7kJlp/view"
          },
          {
            "url": "https://drive.google.com/file/d/1cPv7Ga_WlhlfFwkB1AOm-S8QJ7ydywh0/view",
            "title": "คำสั่ง ตร. ที่ 600/2566 ลง 28 ต.ค.66 เรื่อง การมอบอำนาจหน้าที่ความรับผิดชอบ"
          }
        ],
        "title": "คำสั่งสำนักงานตำรวจแห่งชาติ"
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1qjiNEjnDcwNdhjnUBzvgI4Omvt7-GvkV/view",
            "title": "คำสั่ง คสช. ที่ 14/2560 ลง 21 มี.ค.60 เรื่อง มาตรการเพิ่มประสิทธิภาพการบังคับใช้กฎหมายว่าด้วยการจราจรทางบก"
          }
        ],
        "title": "คำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ"
      },
      {
        "title": "ระเบียบ",
        "docs": [
          {
            "title": "ระเบียบคณะกรรมการฯ ว่าด้วยการให้คำปรึกษาเกี่ยวกับการปฏิบัติงานของเจ้าหน้าที่ของรัฐ พ.ศ.2566",
            "url": "https://drive.google.com/file/d/1fPWsF-4yGOvn5sxwvmNm-zvsj-yuJf_X/view"
          },
          {
            "url": "https://drive.google.com/file/d/1fGkoqjEtjlcrMmtL4ggnWsl_rLNDbKrQ/view",
            "title": "ระเบียบสำนักนายกรัฐมนตรีว่าด้วยระเบียบปฏิบัติในการปรับเป็นพินัย พ.ศ.2566"
          },
          {
            "title": "ระเบียบกรมการขนส่งทางบก ว่าด้วยหลักเกณฑ์การจ่ายเงินสินบนรางวัล (ฉบับที่ 1)",
            "url": "https://drive.google.com/file/d/1jzPBnoz8m36LnzUM28IUFgZ38ti1V1_-/view"
          },
          {
            "url": "https://drive.google.com/file/d/1_36gyzwQ7HoWMGzIWU4PEG0sBh-i38s3/view",
            "title": "ระเบียบกรมการขนส่งทางบก ว่าด้วยหลักเกณฑ์การจ่ายเงินสินบนรางวัล (ฉบับที่ 2)"
          },
          {
            "url": "https://drive.google.com/file/d/1N35RIfe8ZPLUojwoUdGRHQ-VQkeJBh3k/view",
            "title": "ระเบียบกรมการขนส่งทางบก ว่าด้วยหลักเกณฑ์การจ่ายเงินสินบนรางวัล (ฉบับที่ 3)"
          }
        ]
      },
      {
        "docs": [
          {
            "title": "ข้อบังคับประธานศาลฎีกาว่าด้วยพิธีพิจารณาคดีความผิดทางพินัย (ฉบับที่ 2)",
            "url": "https://drive.google.com/file/d/1UoKOpkCGX2kv9oQfoQyUSvx-FnvQWcoh/view"
          }
        ],
        "title": "ข้อบังคับ"
      },
      {
        "docs": [
          {
            "url": "https://docs.google.com/document/d/1-pXmRTY_YvaD4fTrYduTc0hKzQrYNEDm/edit?usp=sharing&ouid=100660808140605681764&rtpof=true&sd=true",
            "title": "แนวทางปฏิบัติตาม พ.ร.บ.ว่าด้วยการปรับเป็นพินัย"
          },
          {
            "url": "https://drive.google.com/file/d/1h_HQ1tU5vkYwfZ1FJVo8egOpuBmCmPF9/view",
            "title": "บรรยายพินัยจราจร"
          },
          {
            "title": "คู่มือการปฏิบัติงานของเจ้าหน้าที่รัฐ",
            "url": "https://drive.google.com/file/d/1uDiI8NODa153nHfqvEkbwCY0D0EVU2MJ/view"
          },
          {
            "url": "https://drive.google.com/file/d/1qbT_9HHx4JlH6_YDyeMUH0ocF-lhoxTT/view",
            "title": "ถาม-ตอบ ปัญหาปรับเป็นพินัย พ.ศ.2565"
          },
          {
            "title": "กระบวนการปรับเป็นพินัย",
            "url": "https://drive.google.com/file/d/1kmoj0BpXRlm19FeYSsT8x8rhAWKzVz9J/view"
          }
        ],
        "title": "คู่มือและแนวทางปฏิบัติ"
      }
    ],
    "id": "pinai",
    "icon": "⚖️",
    "faq": [
      {
        "q": "ทำไมถึงต้องออก พ.ร.บ.ว่าด้วยความผิดทางพินัยฯ",
        "a": "พ.ร.บ.ว่าด้วยการปรับเป็นพินัยฯ เป็นกฎหมายกลางที่ออกโดยรัฐบาล และกรรมการปฏิรูปประเทศ เพื่อเปลี่ยนโทษทางอาญาที่มีเพียงโทษปรับมาเป็นโทษทางพินัย ซึ่งไม่ใช่โทษทางอาญาอีกต่อไป"
      },
      {
        "a": "เนื่องจากเป็นกรณีที่ต้องดำเนินการตามที่กฎหมายกำหนดในเบื้องต้นไปก่อน (เจ้าหน้าที่ของรัฐต้องมีระดับชำนาญการหรือเทียบเท่า) อยู่ระหว่างประสานงานเพื่อแก้ไขให้ตำรวจระดับต่ำกว่ามีอำนาจออกใบสั่งได้",
        "q": "ทำไมถึงกำหนดให้ สว.จร. ขึ้นไปเท่านั้นถึงออกใบสั่งได้"
      },
      {
        "q": "ตำรวจจราจรออกใบสั่งข้อหาอะไรได้บ้าง",
        "a": "ข้อหาที่ออกใบสั่งได้ คือความผิดตาม พ.ร.บ.จราจรทางบก พ.ศ.2522 และ พ.ร.บ.ทางหลวง พ.ศ.2535 ส่วน พ.ร.บ.อื่นๆ เช่น พ.ร.บ.รถยนต์ พ.ร.บ.การขนส่งทางบก ยังรอการประกาศกำหนดเจ้าหน้าที่ที่มีอำนาจ"
      },
      {
        "q": "สถานีที่ไม่มีสารวัตรจราจรทำอย่างไร",
        "a": "หัวหน้าสถานีใช้อำนาจในฐานะหัวหน้าเจ้าพนักงานจราจร ตามคำสั่ง ตร. ที่ 62/2566 ลง 24 ม.ค.66 แต่งตั้งเจ้าหน้าที่ตำรวจระดับ สว. สายงานอื่น (เช่น สวป.) ให้มีอำนาจออกใบสั่งได้"
      },
      {
        "q": "ระบบตัดคะแนน และการชะลอป้ายภาษีตามมาตรา 141/1 ยังดำเนินการได้หรือไม่",
        "a": "ยังสามารถดำเนินการได้ เพราะเป็นมาตรการพิเศษตามกฎหมายจราจรโดยเฉพาะ และให้ดำเนินการผ่านระบบ PTM ดังเดิม"
      }
    ],
    "description": "กฎหมาย ระเบียบ คำสั่ง และแนวทางปฏิบัติตาม พ.ร.บ.ว่าด้วยการปรับเป็นพินัย พ.ศ.2565",
    "title": "ปรับเป็นพินัย"
  },
  {
    "title": "มาตรการชะลอต่อภาษี",
    "description": "มาตรการชะลอการต่อทะเบียนรถและป้ายภาษีสำหรับผู้ที่มีใบสั่งค้างชำระ",
    "icon": "🚗",
    "color": "#2E7D32",
    "id": "chalor",
    "sections": [
      {
        "docs": [
          {
            "url": "",
            "title": "แนวทางมาตรการชะลอต่อภาษีและป้ายทะเบียน"
          },
          {
            "title": "กฎหมายที่เกี่ยวข้องกับการชะลอต่อภาษี มาตรา 141/1",
            "url": ""
          }
        ],
        "title": "เอกสารและระเบียบ"
      }
    ]
  },
  {
    "description": "รวบรวมกฎหมาย ระเบียบ ข้อบังคับ ประกาศ คำสั่ง หนังสือ วิทยุสั่งการ และ MOU ที่เกี่ยวข้อง",
    "title": "กฎหมาย ระเบียบ ข้อบังคับ",
    "id": "law",
    "sections": [
      {
        "title": "กฎหมาย ข้อกำหนด คำสั่ง",
        "docs": [
          {
            "title": "พ.ร.บ.จราจรทางบก พ.ศ.2522 และที่แก้ไขเพิ่มเติม",
            "url": "https://drive.google.com/file/d/1v-ABYpECsm8npC7OcBVfTqXyCXRTudpy/view?usp=drive_link"
          },
          {
            "title": "พ.ร.บ.ทางหลวง พ.ศ.2535",
            "url": "https://drive.google.com/file/d/1DsxRhQBo1fJdhMdovoAyUVu-evA8a8fI/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/13Pc40Fk5Zw2M_lhvVFEv_0aRi9nojFPH/view?usp=drive_link",
            "title": "พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1cD4s93J8_Pc4lQmxdJQ5SCcZvysBc_Du/view?usp=drive_link",
            "title": "พ.ร.บ.การขนส่งทางบก พ.ศ.2522"
          },
          {
            "title": "พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ พ.ศ.2535",
            "url": "https://drive.google.com/file/d/17B8Jr8ta-uQFJzdxuON6wvjWej1RnE_k/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/1GMSHnESKkRpcokYLp3_3Zjl3rq4Rrt6H/view?usp=sharing",
            "title": "กฎกระทรวง ป้ายจราจร เครื่องหมายจราจร หรือสัญญานจราจร สำหรับการจราจรบนทางหลวง พ.ศ.2563"
          },
          {
            "url": "https://drive.google.com/file/d/174jcOwMaRxspJnholG7-5_S320jyH0vk/view?usp=sharing",
            "title": "คำสั่งสำนักงานตำรวจแห่งชาติที่ 62/2566 เรื่อง แต่งตั้งหัวหน้าเจ้าพนักงานจราจร ตาม พ.ร.บ.จราจรทางบก พ.ศ.2522 "
          },
          {
            "title": "ระเบียบเกี่ยวกับการจราจรบนทางพิเศษ พ.ศ.2555",
            "url": "https://www.exat.co.th/wp-content/uploads/2020/10/52775ffaa7103.pdf"
          }
        ]
      },
      {
        "title": "ข้อบังคับห้ามรถบรรทุกเกินในเวลาห้าม",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1fTvK9vtpWk7Wk1SYSCHB71W5g7q9fNdq/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรทั่วราชอาณาจักร  ว่าด้วย การห้ามรถบรรทุก ๔ ล้อ และ ๖ ล้อ เดินในเขตกรุงเทพมหานคร  พ.ศ.2552"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรทั่วราชอาณาจักร  ว่าด้วย การห้ามเดินรถ และห้ามจอด รถบรรทุก 10 ล้อ ขึ้นไปและรถพ่วงในเขตกรุงเทพมหานคร พ.ศ.2543",
            "url": "https://drive.google.com/file/d/159FwnmSx9XMv11k4JsAM7GNKNfGr36X5/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/12c79jcY19qGsuuU-3sYu4Seojp_wGVB0/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรทั่วราชอาณาจักร  ว่าด้วย การห้ามเดินรถ และห้ามจอด รถบรรทุก 10 ล้อ ขึ้นไปและรถพ่วงในเขตกรุงเทพมหานคร (ฉบับที่ 2) พ.ศ.2543"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรทั่วราชอาณาจักร  ว่าด้วย การห้ามเดินรถ และห้ามจอด รถบรรทุก 10 ล้อ ขึ้นไปและรถพ่วงในเขตกรุงเทพมหานคร (ฉบับที่ 3) พ.ศ.2546",
            "url": "https://drive.google.com/file/d/1J8N3wDAQpnT0rplXAkwZYsVFp-qt4wnr/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรทั่วราชอาณาจักร  ว่าด้วย การห้ามเดินรถ และห้ามจอด รถบรรทุก 10 ล้อ ขึ้นไปและรถพ่วงในเขตกรุงเทพมหานคร (ฉบับที่ 4) พ.ศ.2549",
            "url": "https://drive.google.com/file/d/1jZFjYWfmeLqV7ua1EkWvJYxv9kNkptDr/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรทั่วราชอาณาจักร ว่าด้วย การห้ามรถบรรทุกน้ํามัน ตั้งแต่ ๖ ล้อขึ้นไป และรถพjวงเดินในเขตกรุงเทพมหานครและปริมณฑล  พ.ศ.2548",
            "url": "https://drive.google.com/file/d/1cusNnjuJK0JB9U3diMBSAPQpp5b-xS1_/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วย การให้รถยนต์โดยสารขนาดใหญ่ (เกิน 15 ที่นั่ง) เดินรอบพระบรมมหาราชวังตลอดเวลาในถนนหน้าพระลาน  พ.ศ.2558",
            "url": "https://drive.google.com/file/d/1wB2NLQH1A1Fw0YJ_S4tviAibGw8vNRFv/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1W2HN4fLBcHpL3uZQ1fw9_ep7UcMk5QMc/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การห้ามรถบางชนิดเดินในถนนทวีวัฒนา และการห้ามหยุดห้ามจอดรถในซอยหลานหลวง 14  พ.ศ.2550"
          }
        ]
      },
      {
        "title": "ข้อบังคับกำหนดทิศทางเดินรถ",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1p8Z7gyHAX14PcJ-Y-tIWkgMIPfp8fZhl/view?usp=sharing",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการเดินรถทางเดียวในถนนดินแดง 1 พ.ศ.2565"
          },
          {
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการห้ามเดินรถ พ.ศ.2565",
            "url": "https://drive.google.com/file/d/1MHqN76V3qRIaHiugNzt0aIsks22M4Wtd/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1SdJZxR4H9qDN7-dLKxhAQsex7IMcuLiG/view?usp=sharing",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการเดินรถทางเดียวภายในซอยประชาสงเคราะห์ 29  พ.ศ.2566"
          },
          {
            "url": "https://drive.google.com/file/d/1P-w-f04RAU7KfrIH9W0XGW2-uTYFDyqD/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการกําหนดให้ รถเดินได้ทางเดียว ในซอยประชาชื่น 29 ถนนประชาชื่น พ.ศ.2549"
          },
          {
            "url": "https://drive.google.com/file/d/186QhdCvp_DBliE1C5_DAnrnB9__WfEue/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การกําหนดให้ รถเดินได้ ทางเดียว ในถนนภายในศูนย์การค้าหนองแขม  พ.ศ.2549"
          },
          {
            "url": "https://drive.google.com/file/d/1eWFj8Q0dXs8rziT5d8LeroOcu6Ej53MJ/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการห้ามหยุดห้ามจอดรถทุกชนิด และกําหนดเดินรถทางเดียวในซอยลาดพร้าว  พ.ศ.2552"
          },
          {
            "url": "https://drive.google.com/file/d/1Y7VhI-qqxjNlejGFvQvjXTim4RlEwZmZ/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการกําหนดช่องหรือแนวทางเดินรถ ในถนนรามคําแหง  พ.ศ.2552"
          },
          {
            "url": "https://drive.google.com/file/d/1KggDNcWsdHQQ0vCCHEJPuk7hcFAgfCJ4/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การกําหนดช่องทางเดินรถสําหรับรถโดยสารด่วนพิเศษ (BRT) และรถมวลชน  พ.ศ.2553"
          },
          {
            "url": "https://drive.google.com/file/d/1oFixrrUPQzo2iinOm0KBLBZjnT-Tv-2J/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการกําหนดทางเดินรถบริเวณสะพานข้ามแยกลําสาลี ถนนรามคําแหง กรุงเทพมหานคร  พ.ศ.2557"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการห้ามหยุดห้ามจอดรถ การห้ามเลี้ยวรถ และกําหนดให้รถเดินได้ทางเดียว  ในถนนหรือซอยต่าง ๆ ในเขตกรุงเทพมหานคร  (ฉบับที่ 2) พ.ศ.2558",
            "url": "https://drive.google.com/file/d/1ya9wxgLGqiKEpd1zRBq3Pq_NserVQZ3u/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการกําหนดช่องทางเดินรถตามโครงการ “กาญจนาภิเษกขึ้นคู่ขนาน/พระปิ่นเกล้า/พระราม 8 5 นาที”  พ.ศ.2559",
            "url": "https://drive.google.com/file/d/1mQrYPlSRoWkidzubtSc8ctMjEjT5U9FE/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการห้ามจอดรถ กําหนดให้รถเดินได้ทางเดียว โครงการทางพิเศษสายศรีรัช-วงแหวนรอบนอกกรุงเทพมหานคร  พ.ศ.2559",
            "url": "https://drive.google.com/file/d/1gLi3VitRHifPwzyQSwTni7926oVKc-BU/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1aEcwWFufAUYVlhKj3OAqVL1GbXN4jm9i/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการห้ามเลี้ยวรถ การกําหนดช่องทางเดินรถ ในถนนเพชรบุรีตัดใหม่  พ.ศ.2559"
          }
        ]
      },
      {
        "docs": [
          {
            "title": "ข้อบังคับข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ เรื่อง การห้ามรถบรรทุกตั้งแต่ 6 ล้อขึ้นไป รถบรรทุกน้ำมันตั้งแต่ 6 ล้อขึ้นไป รถบรรทุกวัตถุอันตรายตั้งแต่ 6 ล้อขึ้นไป และรถพ่วง เดินในทางพิเศษเฉลิมมหานคร ทางพิเศษศรีรัช และทางพิเศษฉลองรัช ระหว่างเวลาที่กำหนด พ.ศ. 2560",
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp2017.10102017.pdf"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ เรื่อง การห้ามรถบรรทุก 6 ล้อ รถบรรทุกตั้งแต่ 10 ล้อขึ้นไป และรถพ่วงเดินในทางพิเศษเฉลิมมหานคร ทางพิเศษศรีรัช ทางพิเศษฉลองรัช และทางพิเศษอุดรรัถยา และทางพิเศษศรีรัช-วงแหวนรอบนอกกรุงเทพมหานคร ระหว่างเวลาที่กำหนด พ.ศ.2559",
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp2016.No2_.16082016.pdf"
          },
          {
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp2016.No1_.16082016.pdf",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ เรื่อง การห้ามรถบรรทุกน้ำมันตั้งแต่ 6 ล้อขึ้นไป และรถพ่วงเดินในทางพิเศษเฉลิมมหานคร ทางพิเศษศรีรัช ทางพิเศษฉลองรัช และทางพิเศษศรีรัช-วงแหวนรอบนอกกรุงเทพมหานคร ระหว่างเวลาที่ กำหนด พ.ศ.2559"
          },
          {
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการกำหนดช่องทางเดินรถและการห้ามเดินรถ กรณีที่มีการเปิดช่องทางเดินรถสวนทางในทางพิเศษฉลองรัช พ.ศ.2568 ประกาศ ณ วันที่ 24 มกราคม 2568",
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExpRreversibleLane2025.pdf"
          },
          {
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการห้ามรถยนต์บรรทุกส่วนบุคคลที่มีน้ำหนักรวม น้ำหนักบรรทุกเกินกว่าที่กำหนด เดินในทางพิเศษ พ.ศ.2568 ประกาศ ณ วันที่ 24 มกราคม 2568",
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExpPersonalTrucks2025.pdf"
          },
          {
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExpOilTank2025.pdf",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการห้ามรถบรรทุกน้ำมันตั้งแต่ 6 ล้อขึ้นไป และรถพ่วงเดินในทางพิเศษเฉลิมมหานคร ทางพิเศษศรีรัช ทางพิเศษฉลองรัช ทางพิเศษอุดรรัถยา ทางพิเศษประจิมรัถยา และทางพิเศษสายพระราม 3-ดาวคะนอง-วงแหวนรอบนอกกรุงเทพมหานครด้านตะวันตก ช่วงด่านเก็บค่าผ่านทางพิเศษสุขสวัสดิ์-สะพานทศมราชัน (บางโคล่) ระหว่างเวลาที่กำหนด พ.ศ.2568 ประกาศ ณ วันที่ 24 มกราคม 2568"
          },
          {
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExpTrucks2025.pdf",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการห้ามรถบรรทุก 6 ล้อ รถบรรทุกตั้งแต่ 10 ล้อขึ้นไป และรถพ่วงเดินในทางพิเศษเฉลิมมหานคร ทางพิเศษศรีรัช ทางพิเศษฉลองรัช ทางพิเศษอุดรรัถยา ทางพิเศษประจิมรัถยา และทางพิเศษสายพระราม 3-ดาวคะนอง-วงแหวนรอบนอกกรุงเทพมหานครด้านตะวันตก ช่วงด่านเก็บค่าผ่านทางพิเศษสุขสวัสดิ์-สะพานทศมราชัน (บางโคล่) ระหว่างเวลาที่กำหนด พ.ศ.2568 ประกาศ ณ วันที่ 24 มกราคม 2568"
          },
          {
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp.DangerousProhibited.2025.24012025.pdf",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการห้ามรถบรรทุกวัตถุอันตรายเดินในทางพิเศษ พ.ศ. 2568 ประกาศ ณ วันที่ 24 มกราคม 2568"
          },
          {
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp2013.15102013.pdf",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ เรื่อง การห้ามรถยนต์บรรทุกส่วนบุคคลที่มีน้ำหนักรวม น้ำหนักบรรทุกเกินกว่าที่กำหนด เดินในทางพิเศษ พ.ศ.2556"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการกำหนดช่องทางเดินรถและการห้ามเดินรถ กรณีที่มีการเปีดช่องทางเดินรถสวนทางในทางพิเศษฉลองรัช พ.ศ.2561",
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp2013.16082018_2.pdf"
          },
          {
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp.DangerousProhibited.2016.No2_.16082016.pdf",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ เรื่อง การห้ามรถบรรทุกวัตถุอันตรายเดินใน ทางพิเศษ พ.ศ.2559"
          },
          {
            "title": "ข้อบังคับข้อบังคับเจ้าพนักงานจราจรในทางพิเศษ ว่าด้วยการกำหนดช่องทางเดินรถและการห้ามเดินรถ กรณีที่มีการเปิดช่องทางเดินรถสวนทางในทางพิเศษฉลองรัช (ฉบับที่ 2) พ.ศ.2561",
            "url": "https://www.exat.co.th/download/E0B89EE0B8A3E0B89A.E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3/E0B882E0B989E0B8ADE0B8A1E0B8B9E0B8A5E0B882E0B988E0B8B2E0B8A7E0B8AAE0B8B2E0B8A3E0B895E0B8B2E0B8A1E0B8A1E0B8B2E0B895E0B8A3E0B8B2_E0B997/E0B8A1.E0B997E0B994/%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25B1%25E0%25B8%259A/RegForTrafficOnTheExp2013.No2_.30082018.pdf"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การห้ามรถบรรทุก ตั้งแต่ 6 ล้อขึ้นไป เดินบนสะพานกรุงธน (ซังฮี้) ตลอดเวลา  พ.ศ.2555",
            "url": "https://drive.google.com/file/d/1mgPshwPuXdW1_C1vjlrHyqQ-yD31kEaY/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับกองบัญชาการตํารวจนครบาล  ว่าด้วย การห้ามหยุด ห้ามจอดรถในถนนสายต่าง ๆ ในเขตกรุงเทพมหานคร พ.ศ.2534",
            "url": "https://drive.google.com/file/d/1ahKPuhv4N6zirXyVIBtrTjEtrSxjohDh/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1DUIiwWjzNvrMbSbgJ0yImvg9peOAmL_9/view?usp=sharing",
            "title": "ข้อบังคับกองบัญชาการตํารวจนครบาล  ว่าด้วย แก้ไขเปลี่ยนแปลง การห้ามจอดรถ ในซอยราชวิถี 15 ซอยเสนารักษ์  แขวงอนุสาวรีย์ชัยสมรภูมิ เขตราชเทวี กรุงเทพมหานคร  พ.ศ.2538"
          }
        ],
        "title": "ข้อบังคับบนทางพิเศษ"
      },
      {
        "title": "ข้อบังคับการห้ามใช้ สะพาน ทางยกระดับ และอุโมงค์ข้ามแยก",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1bumuXV6pzjme_FcAHqe-1YD1sRE2Bc6H/view?usp=drive_link",
            "title": "ข้อบังคับ บช.น. ว่าด้วย ระเบียบเกี่ยวกับการจราจร ในทางคู่ขนานลอยฟ้า บนถนนบรมราชชนนี พ.ศ.2541"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วย การห้ามรถบรรทุกตั้งแต่ 10 ล้อขึ้นไป รถสามล้อ รถจักรยานยนต์ รถจักรยาน ขึ้นสะพานข้ามแยก ฯ พ.ศ.2552",
            "url": "https://drive.google.com/file/d/1zA3Bhvi98mtY8TAyx3mulYZhW6ZRhh98/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1j5amAfh4-pKR3ds0h2iuGUxxthUgXwVT/view?usp=sharing",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วย การห้ามรถบรรทุกตั้งแต่ 10 ล้อขึ้นไป ใช้สะพานข้ามแยก ทางแยกต่างระดับ ทางยกระดับ ในเขตกรุงเทพมหานครพ.ศ.2567"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การห้ามรถบางชนิดและล้อเลื่อนลากเข็น เดินบนสะพานข้ามทางแยกถนนศรีอยุธยา  ตัดถนนพญาไท พ.ศ.2549",
            "url": "https://drive.google.com/file/d/14YfLP5VnlSzOe6ZlV64o30PaMJLRooLe/view?usp=sharing"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย แก้ไขเปลี่ยนแปลงการห้ามรถยนต์บรรทุกตั้งแต่ ๖ ล้อขึ้นไป เดินบนสะพานข้ามทางแยกถนนประชาชื่น - ถนนรัชดาภิเษก (แยกประชานุกูล) และสะพานข้ามทางแยกถนนกรุงเทพ - นนทบุรี - ถนนรัชดาภิเษก (แยกวงศ์สว่าง)  พ.ศ.2549",
            "url": "https://drive.google.com/file/d/1iekcWjgathLVyEAsn4K8LX7aNN1PhUbI/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/101XkkTdwVOBnjC-wmTMil1fGSIYWCRCj/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การห้ามรถบางชนิดและล้อเลื่อนลากเข็น เดินในถนนรัชดาภิเษกผ่านทางลอด  ใต้ทางแยกรัชดา-สุทธิสารและแยกรัชดา-ห้วยขวาง พ.ศ.2550"
          },
          {
            "url": "https://drive.google.com/file/d/10MHma7_dr4gP0CmljlFvTfJ1tKkyK2o4/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การห้ามรถจักรยานยนต์ ขึ้นสะพานข้ามแยก การห้ามหยุดห้ามจอดรถ  กําหนดให้ รถเดินได้ทางเดียวในถนนหรือซอยต่าง ๆ พ.ศ.2552"
          },
          {
            "url": "https://drive.google.com/file/d/1XG2cgHEf3fSt6c6FcqO2OTrqDf7ekx8L/view?usp=sharing",
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการห้ามรถบางชนิดและล้อเลื่อนลากเข็น เดินบนสะพานข้ามทางร่วมทางแยก สะพานยกระดับ สะพานข้ามแม่น้ํา และในอุโมงค์ลอดทางร่วมทางแยก  พ.ศ.2559"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วย การห้ามรถบรรทุก ตั้งแต่ 6 ล้อขึ้นไป เดินบนสะพานกรุงธน (ซังฮี้) ตลอดเวลา  พ.ศ.2555",
            "url": "https://drive.google.com/file/d/1mgPshwPuXdW1_C1vjlrHyqQ-yD31kEaY/view?usp=sharing"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/12HRRlSjBp1JusB3UJ9jEugrnzQlXS3qR/view?usp=sharing",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการจำกัดความเร็ว และห้ามใช้เสียง ในเขตกรุงเทพมหานคร พ.ศ.2567"
          },
          {
            "title": "กฎกระทรวง  กำหนดอัตราความเร็วของยานพาหนะบนทางหลวงแผ่นดินหรือทางหลวงชนบทที่กำหนด  พ.ศ.2564",
            "url": "https://drive.google.com/file/d/1UDdGuCdNI15OcWs43xxyk7Ouafk_UBgQ/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1MSR3UdM1vRtfq5T65PAZphX2E1a-8zmB/view?usp=sharing",
            "title": "กฎกระทรวง  กำหนดอัตราความเร็วสำหรับการขับรถในทางเดินรถ  พ.ศ.2564"
          },
          {
            "url": "https://drive.google.com/file/d/1XlPd3Xepd5KfGUcJ3U1BSEtUo9nc8XVE/view?usp=sharing",
            "title": "ข้อบังคับหัวหน้าเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร ว่าด้วยการจำกัดความเร็วและห้ามใช้เสียง บริเวณโดยรอบเขตพระราชฐาน (901 แลนด์)  พ.ศ.2564"
          },
          {
            "title": "ข้อบังคับเจ้าพนักงานจราจรในเขตกรุงเทพมหานคร  ว่าด้วยการกําหนดอัตราความเร็วของรถ  พ.ศ.2561",
            "url": "https://drive.google.com/file/d/1INn4I-d8GFUTpjBuadfl-1V7F4uEsa27/view?usp=sharing"
          }
        ],
        "title": "ข้อกำหนดความเร็วรถในทาง"
      },
      {
        "title": "กฎกระทรวงประกอบ พ.ร.บ.จราจรทางบก พ.ศ.2522",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1wOMg5RHYO6X0BKem2wVNpqajJgmwN4Ym/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 2 (พ.ศ.2522) ออกตามความในพระราชบัญญัติจราจรทางบก  พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1WoxtX9ia17UfhnKW-iLDHki_b8ot2qeT/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 3 (พ.ศ.2522) ออกตามความในพระราชบัญญัติจราจรทางบก  พ.ศ.2522"
          }
        ]
      },
      {
        "title": "กฎกระทรวงประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
        "docs": [
          {
            "title": "กฎกระทรวง ฉบับที่ 1 พ.ศ.2523 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1W2y8zYkPyuSStqU6UWvNkPwdbBybYROv/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1CHBjMVGWxMNLmwenD2ZjNvJeDs8NaPmr/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 2 พ.ศ.2523 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 8 พ.ศ.2524 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1y-4wRx8GKUwku5NIF5Lz76T4KzGGBted/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 9 พ.ศ.2525 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/19dt9S5j1Y0R3OM6ygky1aLczkrclMYqh/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1x-nLQ-qyV0d2Ptepi2Roa7wJleew43W3/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 10 พ.ศ.2525 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 11 พ.ศ.2525 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1n1RtQKkxXrjp40671PjtNkxOQ5rlCklY/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/11MWY88zIQF1EQ99HQ4auPWECsuCIKplh/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 12 พ.ศ.2525 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 13 พ.ศ.2525 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/18rcs_MzsBdvzkwmMc-b5EbTpGHtiPMGD/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1fAMLgeyebWhHdTs_odtr4Z2hAygRv3bL/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 14 พ.ศ.2525 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1MZneijMj5tUTRVdoHZrPheZnPy3oJYVU/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 17 พ.ศ.2526 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/160SZXdxOGRPCDVMLok2CFrm5dExqmxn5/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 19 พ.ศ.2537 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 20 พ.ศ.2537 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1bJdBbeKYeDQXlDE5F8bi04iQOx_gWmqO/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1EWP-TdG53xI3v4jJsQcOtCeIQ4LTJWeN/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 21 พ.ศ.2537 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1RojUouW_XPwarJAFX6tr-SaJ1rUc-qCG/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 22 พ.ศ.2537 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 23 พ.ศ.2538 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/14z9n-CXH07r3xhjg6Vemwsul_85VaWBg/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 24 พ.ศ.2539 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1I1acPKjCLgFuIfsCDV8ut4cwQh-82GLZ/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 25 พ.ศ.2539 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1fHjg7_JvrO9gW5eTuLKLCfSOEojWuoOf/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 28 พ.ศ.2541 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1PAmsS1wF2Z6A1y3U5r_M8vly48-MVZha/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1zQ6-rnv8XYVmXbSBLcgFQN6LJlGUh-vT/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 32 พ.ศ.2541 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/14Hvo9DISRmH7-AFJJQSvSWNI-0ptEQ0o/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 34 พ.ศ.2542 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 40 พ.ศ.2546 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1ppy6jJZiZ_kLS2KZ4VE0QPgrpbLPH63r/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1y5CpSFunZRjU1nIyOrJX2Zmt5qxogtHg/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 41 พ.ศ.2547 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 42 พ.ศ.2547 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1t62G1gonwYmrRnK8GjW4r6arxA8nxvpE/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1EFq1vQal_cmA-uKJdrLTpg9vLijUQtou/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 43 พ.ศ.2548 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 44 พ.ศ.2548 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1LHOYiZTMq77zZVwDNMUnFQaZerqpagOz/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1fmzNwLdqGoQQsorcP-iA2SshAPOw18ju/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 45 พ.ศ.2548 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "title": "กฎกระทรวง ฉบับที่ 46 พ.ศ.2548 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522",
            "url": "https://drive.google.com/file/d/19o0tVJiu-sLKtqWDL6IXk_5fUaA6T0_d/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1jM50F_23zGKlsY5d5aI8EgpEC9Piboi-/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 47 พ.ศ.2548 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1y-qqF3MT2CrIx480saVk9VCXysfNNzAh/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 48 พ.ศ.2548 ประกอบ พ.ร.บ.รถยนต์ พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1dJCox94kzaEEqNr5xJuIvP-TyqyxwldY/view?usp=sharing",
            "title": "กฎกระทรวง  ว่าด้วยรถยนต์รับจ้างบรรทุกคนโดยสารไม่เกินเจ็ดคน ที่จดทะเบียนในเขตกรุงเทพมหานคร  พ.ศ.2550"
          },
          {
            "url": "https://drive.google.com/file/d/1Rs6djMdM2glNc8u65sc4ZHZjfljSWjbp/view?usp=sharing",
            "title": "กฎกระทรวง  ว่าด้วยรถยนต์รับจ้างบรรทุกคนโดยสารไม่เกินเจ็ดคน ที่จดทะเบียนในเขตกรุงเทพมหานคร (ฉบับที่ 2)  พ.ศ.2558"
          },
          {
            "url": "https://drive.google.com/file/d/1QrtHEUSv3DiRdPgb_bX_xJ1YtneMLpXS/view?usp=sharing",
            "title": "กฎกระทรวง  ว่าด้วยรถยนต์รับจ้างบรรทุกคนโดยสารไม่เกินเจ็ดคน  พ.ศ.2560"
          },
          {
            "url": "https://drive.google.com/file/d/1BuMFgFkQLyayphvgEN_QJk1H7QDjmJv5/view?usp=sharing",
            "title": "กฎกระทรวง  ว่าด้วยรถยนต์รับจ้างบรรทุกคนโดยสารไม่เกินเจ็ดคน (ฉบับที่ 2 ) พ.ศ. 2563"
          },
          {
            "url": "https://drive.google.com/file/d/1-hlUmOADbzF_jVJQF4kPvtOu7_pinekc/view?usp=sharing",
            "title": "กฎกระทรวง ยกเลิกกฎกระทรวง ซึ่งออกตามกฎหมายว่าด้วยรถยนต์ บางฉบับที่ไม่เหมาะสมกับกาลปัจจุบัน  พ.ศ.2550"
          },
          {
            "title": "กฎกระทรวง ยกเลิกกฎกระทรวง ซึ่งออกตามกฎหมายว่าด้วยรถยนต์ บางฉบับที่ไม่เหมาะสมกับกาลปัจจุบัน (ฉบับที่ 2)  พ.ศ.2550",
            "url": "https://drive.google.com/file/d/1-dGUvTLonVxrY4n_Pgr2zRqKDiStlyTk/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง  ยกเลิกกฎกระทรวงซึ่งออกตามกฎหมายว่าด้วยรถยนต์บางฉบับ ที่ไม่เหมาะสมกับกาลปัจจุบัน (ฉบับที่ 3)  พ.ศ.2555",
            "url": "https://drive.google.com/file/d/1eZks8sVSVkEvv-v5Yu9M1p95sycGsgW5/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง ยกเลิกกฎกระทรวง ซึ่งออกตามกฎหมายว่าด้วยรถยนต์ บางฉบับที่ไม่เหมาะสมกับกาลปัจจุบัน (ฉบับที่ 4)  พ.ศ.2555",
            "url": "https://drive.google.com/file/d/1m74bvyIZQRRSQitYQfdEDzfYbylEy-34/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1eftA7tL8sM5amf_LcKvRP36xtdXolTNj/view?usp=sharing",
            "title": "กฎกระทรวง  กําหนดอัตราค่าจ้างบรรทุกคนโดยสารสําหรับรถจักรยานยนต์สาธารณะ  พ.ศ.2548"
          },
          {
            "url": "https://drive.google.com/file/d/1R7hF0Vb87QRzVsBWgnxSU_4kcMHqngeV/view?usp=sharing",
            "title": "กฎกระทรวง กําหนดความปลอดภัยในการรับจ้างบรรทุกคนโดยสาร  ของผู้ขับรถจักรยานยนต์สาธารณะ พ.ศ.2548"
          },
          {
            "title": "กฎกระทรวง กําหนดส่วนควบและเครื่องอุปกรณ์สําหรับรถ พ.ศ.2551",
            "url": "https://drive.google.com/file/d/1ZEJ1J-A_aMs9v-26uQ-Lzj6Z7DSP-W7X/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง กําหนดหลักเกณฑ์การเพิกถอนทะเบียน รถจักรยานยนต์สาธารณะ พ.ศ.2553",
            "url": "https://drive.google.com/file/d/1TmUmQCUF_pgXRAxo9BGe4ruxLQ9iZVLX/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง  กําหนดอัตราค่าจ้างบรรทุกคนโดยสารสําหรับรถจักรยานยนต์สาธารณะ  พ.ศ.2559",
            "url": "https://drive.google.com/file/d/1ugStwf6Tz9Bal8uPD4PoVqtsAzh0mCLz/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง  กําหนดหลักเกณฑ์การเพิกถอนทะเบียนรถจักรยานยนต์สาธารณะ  พ.ศ.2560",
            "url": "https://drive.google.com/file/d/1DU71tIkMK3dt1_vee0yqx3fn15wsJa1X/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง  การขอรับใบอนุญาต การออกใบอนุญาต และการต่ออายุ ใบอนุญาตประกอบการรับจ้างบรรทุกคนโดยสารแบบพิเศษ  พ.ศ.2560",
            "url": "https://drive.google.com/file/d/11YZbhcwT3vXhdLRpLyQvIyN_vgsme57W/view?usp=sharing"
          },
          {
            "title": "กฎกระทรวง  การขอและการออกใบอนุญาตขับรถ และการต่ออายุใบอนุญาตขับรถ  พ.ศ. 2563",
            "url": "https://drive.google.com/file/d/11uoRplb89GMO6hIVYudqBtZmMtA7pHtt/view?usp=sharing"
          }
        ]
      },
      {
        "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1R-52VVjv6q_W6hjeJsoKzkbJ_L8_5II1/view?usp=sharing",
            "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ เรื่อง กำหนดชื่อและประเภทของยาเสพติดให้โทษ และประเภทของรถที่ให้เจ้าพนักงานมีอำนาจตรวจสอบผู้ขับขี่ "
          },
          {
            "url": "https://drive.google.com/file/d/1RV45B6NbZurExZ0hEmp34l7oHWRRQpgE/view?usp=sharing",
            "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ เรื่อง กำหนดประเภทและชนิดของรถยนต์ ลักษณะและวิธีการใช้เข็มขัดนิรภัย "
          },
          {
            "url": "https://drive.google.com/file/d/1ecsNXGoZsMJSMR12bobOCBlGC_mAktb4/view?usp=sharing",
            "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ เรื่อง การชำระค่าปรับ การชำระค่าปรับทางไปรษณีย์ และวิธีการธุรกรรมทางอิเล็กทรอนิกส์ บัตรเครดิต หรือวิธีการอื่น โดยผ่านธนาคารหรือหน่วยบริการรับชำระเงิน และกำหนดจำนวนวนค่าปรับตามที่เปรียบเทียบ สำหรับความผิดตามพระราชบัญญัติจราจรทางบก พ.ศ.2522 พ.ศ.2559"
          },
          {
            "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ เรื่อง สัญญานจราจร เครื่องหมายจราจร และความหมายของสัญญานจราจร และเครื่องหมายจราจร",
            "url": "https://drive.google.com/file/d/1dBo4G2egRWM8HGgaeZl-fuRj862X05x_/view?usp=sharing"
          }
        ]
      }
    ],
    "color": "#4527A0",
    "icon": "📚"
  },
  {
    "icon": "🚦",
    "color": "#E65100",
    "id": "checkpoint",
    "sections": [
      {
        "docs": [
          {
            "url": "sop-checkpoint.html",
            "title": "🌐 เปิดคู่มือ SOP การตั้งจุดตรวจแบบ Interactive (Full Page)"
          },
          {
            "title": "หนังสือด่วนที่สุด ที่ 0007.22/438 ลง 2 ก.พ. 2566 — 11 หลักเกณฑ์การตั้งจุดตรวจ (คำสั่ง ผบ.ตร.)",
            "url": "https://drive.google.com/file/d/1BEXdYG16iKdDHWUhmQZNDnjXoKhib1Ph/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1nkJhByjG1pnRO-WOPNFUzmopuwQj75cg/view?usp=sharing",
            "title": "หนังสือ ตร. ที่ 0007.22/1572 ลง 31 พ.ค. 2564 — แนวทางการตั้งด่านตรวจ จุดตรวจ และจุดสกัด"
          },
          {
            "title": "หนังสือ ตร. ที่ 0007.34/681 — มาตรการปฏิบัติเกี่ยวกับการตั้งจุดตรวจเพื่อบังคับใช้กฎหมาย",
            "url": "https://drive.google.com/file/d/15lEJYImPM0nhp1j5URYnmDx26rUGMiN-/view?usp=sharing"
          }
        ],
        "title": "📋 คู่มือ SOP และภาพรวมการตั้งจุดตรวจ"
      },
      {
        "docs": [
          {
            "title": "หนังสือ ตร. ที่ 0009.22/1572 (2564) — อำนาจอนุมัติและแนวทางปฏิบัติด้านป้องกันปราบปราม",
            "url": "https://drive.google.com/file/d/1nkJhByjG1pnRO-WOPNFUzmopuwQj75cg/view?usp=sharing"
          }
        ],
        "title": "⚖️ กฎหมายและระเบียบที่เกี่ยวข้อง"
      },
      {
        "docs": [
          {
            "title": "แนวทางการตอบคำถาม — กรณีบุคคลขอตรวจสอบการปฏิบัติหน้าที่เจ้าหน้าที่ตำรวจ ณ จุดตรวจ",
            "url": "https://drive.google.com/file/d/1oZ38YMnCA7K0sCz--w24g4hLG8YdyUoj/view?usp=sharing"
          },
          {
            "title": "เอกสารอบรมเชิงปฏิบัติการ การตั้งจุดตรวจกวดขันวินัยจราจร",
            "url": "https://drive.google.com/drive/folders/1ZxM5V3Ih07xPQTzNQRlojQcK2nLl-Q6n"
          },
          {
            "title": "แนวทางปฏิบัติตามระเบียบ ตร. ที่เกี่ยวข้องกับงานจราจรและการตั้งจุดตรวจ",
            "url": "https://drive.google.com/drive/folders/1ZxM5V3Ih07xPQTzNQRlojQcK2nLl-Q6n"
          }
        ],
        "title": "📂 เอกสารอบรมและแนวทางตอบคำถาม"
      }
    ],
    "title": "มาตรฐานการตั้งจุดตรวจ",
    "sopLink": "sop-checkpoint.html",
    "faq": [
      {
        "a": "ต้องได้รับอนุมัติจาก ผบก. (ผู้บังคับการ) ขึ้นไปทุกครั้ง ทั้งจุดตรวจจราจรและจุดตรวจป้องกันปราบปราม การตั้งโดยไม่ได้รับอนุมัติถือว่าผิดระเบียบ",
        "q": "ใครมีอำนาจอนุมัติการตั้งจุดตรวจ?"
      },
      {
        "a": "ต้องเป็นนายตำรวจชั้นสัญญาบัตร ระดับรองสารวัตร (รอง สว.) ขึ้นไป เพื่อควบคุมและกำกับการปฏิบัติงานให้ถูกต้อง",
        "q": "ใครต้องเป็นหัวหน้าจุดตรวจ?"
      },
      {
        "a": "บังคับ 100% ทุกนายต้องมีและเปิดตลอดการปฏิบัติงาน เพื่อความโปร่งใสและสร้างความเชื่อมั่นให้ประชาชน ห้ามตั้งจุดตรวจหากไม่มีกล้อง",
        "q": "ทำไมต้องใช้กล้อง Bodycam?"
      },
      {
        "a": "ต้องบันทึกก่อนออกปฏิบัติทุกครั้ง เพื่อให้ผู้บังคับบัญชาตรวจสอบได้แบบ Real-time และตรวจสอบความซ้ำซ้อนกับหน่วยอื่น",
        "q": "ต้องบันทึกในระบบ TPCC ก่อนหรือหลังตั้งจุดตรวจ?"
      },
      {
        "q": "บทลงโทษสำหรับผู้ขัดขวางเจ้าพนักงาน ณ จุดตรวจ คืออะไร?",
        "a": "ต่อสู้ด้วยกำลัง: จำคุกไม่เกิน 2 ปี ปรับไม่เกิน 4,000 บาท (ป.อ. ม.138) / ขัดคำสั่ง: จำคุกไม่เกิน 10 วัน ปรับไม่เกิน 500 บาท (ป.อ. ม.368)"
      },
      {
        "q": "เจ้าหน้าที่ตำรวจที่ปฏิบัติผิดระเบียบจะถูกลงโทษอย่างไร?",
        "a": "ถูกลงโทษทั้งวินัย อาญา และปกครอง หัวหน้าสถานีและผู้บังคับบัญชาที่ปล่อยปละละเลยต้องร่วมรับผิดชอบด้วย จเรตำรวจสุ่มตรวจโดยไม่แจ้งล่วงหน้า"
      },
      {
        "q": "ประเภทของจุดตรวจมีกี่ประเภท?",
        "a": "1) วินัยจราจร (เข็มขัด ใบขับขี่ ความเร็ว โทรศัพท์) 2) ยาเสพติด (สุ่มตรวจ ตรวจปัสสาวะ) 3) แอลกอฮอล์ (เป่าเครื่องวัด) 4) ป้องกันอาชญากรรม (พื้นที่เสี่ยง เหตุซ้ำซาก)"
      }
    ],
    "description": "SOP การตั้งจุดตรวจกวดขันวินัยจราจร — 11 หลักเกณฑ์ ขั้นตอน อุปกรณ์ กฎหมาย และเอกสารอ้างอิง"
  },
  {
    "sections": [
      {
        "title": "ระเบียบและคำสั่ง",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1sET-PnceeahQiHudpMVxPbEHkGGT5vPC/view?usp=sharing",
            "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ เรื่อง กำหนดเงื่อนไข หลักเกณฑ์การขออนุญาตการใช้สัญญานไฟวับวาบ เสียงสัญญานไซเรน หรือเสียงสัญญานอย่างอื่น และเครื่องหมายแสดงลักษณะของรถฉุกเฉิน พ.ศ.2566"
          },
          {
            "title": "ข้อกำหนดสำนักงานตำรวจแห่งชาติ เรื่อง กำหนดเงื่อนไข หลักเกณฑ์การขออนุญาตการใช้สัญญานไฟวับวาบ เสียงสัญญานไซเรน หรือเสียงสัญญานอย่างอื่น และเครื่องหมายแสดงลักษณะของรถฉุกเฉิน (ฉบับที่ 2) พ.ศ.2567",
            "url": "https://drive.google.com/file/d/1w99VeqJtksm_nQYWGPEmqq7Co-yfRA_H/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/1w99VeqJtksm_nQYWGPEmqq7Co-yfRA_H/view?usp=sharing",
            "title": "คำสั่งสำนักงานตำรวจแหน่งชาติ ที่ 549/2566 เรื่อง มอบอำนาจการอนุญาตให้รถฉุกเฉิน รถในราชการทหารหรือตำรวจหรือรรถอื่นใช้ไฟสัญญาณวับวาบหรือใช้เสียงสัญญาณไซเรนหรือเสียงสัญญาณอย่างอื่นได้"
          },
          {
            "url": "https://drive.google.com/file/d/1VF5LGS5IZxnbuRY4mINnoluX_TEHrVjG/view?usp=drive_link",
            "title": "คำสั่งสำนักงานตำรวจแหน่งชาติ ที่ 549/2566 เรื่อง มอบอำนาจการอนุญาตให้รถฉุกเฉิน รถในราชการทหารหรือตำรวจหรือรรถอื่นใช้ไฟสัญญาณวับวาบหรือใช้เสียงสัญญาณไซเรนหรือเสียงสัญญาณอย่างอื่นได้"
          },
          {
            "url": "https://drive.google.com/file/d/1VF5LGS5IZxnbuRY4mINnoluX_TEHrVjG/view?usp=sharing",
            "title": "คำสั่งสำนักงานตำรวจแหน่งชาติ ที่ 549/2566 เรื่อง มอบอำนาจการอนุญาตให้รถฉุกเฉิน รถในราชการทหารหรือตำรวจหรือรรถอื่นใช้ไฟสัญญาณวับวาบหรือใช้เสียงสัญญาณไซเรนหรือเสียงสัญญาณอย่างอื่นได้"
          }
        ]
      }
    ],
    "id": "siren",
    "color": "#C62828",
    "icon": "🚨",
    "description": "ระเบียบและแนวทางการอนุญาตติดตั้งและใช้งานไฟวับวาบและเสียงไซเรนบนยานพาหนะ",
    "title": "การอนุญาตไฟวับวาบเสียงไซเรน"
  },
  {
    "title": "คดีเมาแล้วขับ",
    "description": "แนวทางดำเนินคดีข้อหาเมาแล้วขับซ้ำเป็นครั้งที่สองตามกฎหมายจราจร",
    "icon": "🍺",
    "color": "#6A1B9A",
    "id": "drunk",
    "sections": [
      {
        "title": "แนวทางการดำเนินคดี",
        "docs": [
          {
            "title": "แนวทางดำเนินคดีข้อหาเมาแล้วขับซ้ำเป็นครั้งที่สอง",
            "url": ""
          },
          {
            "url": "",
            "title": "กฎหมายและบทลงโทษสำหรับผู้กระทำผิดเมาแล้วขับซ้ำ"
          }
        ]
      }
    ]
  },
  {
    "icon": "📊",
    "id": "points",
    "sections": [
      {
        "docs": [
          {
            "url": "https://ratchakitcha.soc.go.th/documents/17218757.pdf",
            "title": "ระเบียบว่าด้วยการตัดคะแนนและพักใช้ใบขับขี่"
          },
          {
            "url": "https://drive.google.com/file/d/1tbvSUcJtuzjFcHManc_9d874h89q3Iga/view?usp=drivesdk",
            "title": "ตารางความผิดและอัตราการตัดคะแนน"
          },
          {
            "url": "https://drive.google.com/file/d/1oLFW-cOQPOzUDJMxmzpXl0tsAb6cQW5R/view?usp=drivesdk",
            "title": "ขั้นตอนการดำเนินการตัดคะแนนในระบบ PTM"
          },
          {
            "url": "https://drive.google.com/file/d/14e4Wzf9R4Iy4eSVPwe43cK6ynQ9c26F0/view?usp=drivesdk",
            "title": "ช่องการตรวจสอบคะแนนใบขับขี่"
          }
        ],
        "title": "ระเบียบและแนวทาง"
      }
    ],
    "color": "#00695C",
    "title": "ระบบตัดคะแนน",
    "description": "ระบบตัดคะแนนใบขับขี่ตาม พ.ร.บ.จราจรทางบก มาตรา 98/2"
  },
  {
    "description": "ระบบออกใบสั่งจราจรอิเล็กทรอนิกส์ Police Traffic Management System",
    "title": "ใบสั่งจราจร (PTM)",
    "color": "#01579B",
    "id": "ptm",
    "sections": [
      {
        "title": "การออกใบสั่ง",
        "docs": [
          {
            "title": "คู่มือการใช้งานระบบ PTM สำหรับการออกใบสั่ง",
            "url": "https://drive.google.com/file/d/1CHQQUoikUWNjGHTgXFyECcjKDKFZkDnn/view?usp=drivesdk"
          },
          {
            "title": "ขั้นตอนการออกใบสั่งในระบบ PTM",
            "url": "https://drive.google.com/file/d/1jiw1Y1AXrh_r56al6GdBE9_pIYow6wSb/view?usp=drivesdk"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/17i20ObdCIIF4U7vFSDQcQzpIaevcsa12/view?usp=drivesdk",
            "title": "คู่มือการออกใบเสร็จในระบบ PTM"
          },
          {
            "title": "ขั้นตอนการรับชำระค่าปรับและออกใบเสร็จ",
            "url": "https://drive.google.com/file/d/1A0pL20sQS1FE9A3u7G34s2EkgLeqBCb3/view?usp=drivesdk"
          }
        ],
        "title": "การออกใบเสร็จ"
      }
    ],
    "icon": "💻"
  },
  {
    "description": "ระบบรายงานและติดตามผลการปฏิบัติงานของตำรวจจราจร Police Reporting System",
    "title": "อบถ.ตร. (PRS)",
    "color": "#37474F",
    "sections": [
      {
        "title": "คู่มือระบบ PRS",
        "docs": [
          {
            "url": "",
            "title": "คู่มือการใช้งานระบบ PRS"
          },
          {
            "url": "",
            "title": "แนวทางการรายงานผลการปฏิบัติงานประจำวัน"
          }
        ]
      }
    ],
    "id": "prs",
    "icon": "📋"
  },
  {
    "title": "ไปรษณีย์อิเล็กทรอนิกส์ (E-AR)",
    "description": "ระบบส่งใบสั่งทางไปรษณีย์อิเล็กทรอนิกส์ Electronic Acknowledgment Receipt",
    "icon": "✉️",
    "sections": [
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1sQP4mzAPXXID92KkP6RFuprd2iAhXZNf/view?usp=drive_link",
            "title": "ประกาศคณะกรรมการกิจการไปรษณีย์ เรื่อง ให้ใช้ไปรษณียนิเทศ พ.ศ. ๒๕๖๖"
          },
          {
            "url": "https://drive.google.com/file/d/1VLSyryBm3fxCbsApJUsei_ayBnJevVCu/view?usp=sharing",
            "title": "ระเบียบสำนักงานตำรวจแห่งชาติ ว่าด้วยการส่งใบสั่งทางไปรษณีย์ พ.ศ.2565"
          },
          {
            "addedAt": "2026-06-10T04:45:22.170Z",
            "url": "https://drive.google.com/file/d/12XVZi79VkXIjm6GpXE-wHtmbOs1q4sPD/view",
            "title": "ประกาศบริษัทไปรษณีย์ไทย เรื่องการให้บริการไปรษณีย์ลงทะเบียนตอบรับภายในประเทศ ผ่านช่องทางอิเล็กทรอนิกส์"
          }
        ],
        "title": "ระเบียบและคู่มือ"
      }
    ],
    "id": "ear",
    "color": "#BF360C"
  },
  {
    "description": "ระเบียบและแนวทางการปฏิบัติด้านการเงินสำหรับงานจราจร",
    "title": "ระเบียบด้านการเงิน",
    "color": "#F57F17",
    "id": "finance",
    "sections": [
      {
        "title": "การเบิกจ่ายเงินรางวัล",
        "docs": [
          {
            "title": "ระเบียบว่าด้วยการเบิกจ่ายเงินรางวัลนำจับและเงินสินบน",
            "url": ""
          },
          {
            "url": "",
            "title": "แนวทางการปฏิบัติด้านการเงินสำหรับงานจราจร"
          }
        ]
      },
      {
        "title": "ระเบียบไปรษณีย์ตอบรับ E-AR",
        "docs": [
          {
            "title": "ระเบียบการเบิกจ่ายไปรษณีย์ตอบรับ E-AR",
            "url": ""
          }
        ]
      },
      {
        "title": "แบบฟอร์มการเบิกจ่ายงบประมาณ",
        "docs": []
      }
    ],
    "icon": "💰"
  },
  {
    "description": "หลักเกณฑ์และแนวทางการเคลื่อนย้ายยานพาหนะที่จอดผิดกฎหมายหรือกีดขวางการจราจร",
    "title": "หลักเกณฑ์เคลื่อนย้ายรถ",
    "color": "#4E342E",
    "id": "towing",
    "sections": [
      {
        "title": "หลักเกณฑ์และระเบียบ",
        "docs": [
          {
            "title": "ระเบียบสำนักงานตำรวจแห่งชาติ  เรื่อง หลักเกณฑ์และวิธีการในการเคลื่อนย้ายรถ การใช้เครื่องมือบังคับ  ไม่ให้เคลื่อนย้ายรถที่หยุดหรือจอดอยู่อันเป็นการฝ่าฝืนกฎหมายว่าด้วยจราจรทางบก พ.ศ.2564",
            "url": "https://drive.google.com/file/d/1MacDHhJo_HoH7wr5JqiZ0hQFfGsgqr2A/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1KtOT5zfGN1vZAYTDtBtVCT5I7PiTErKL/view?usp=sharing",
            "title": "กฎกระทรวง ฉบับที่ 13 พ.ศ.2534 ออกความตามใน พ.ร.บ.จราจรทางบก พ.ศ.2522"
          },
          {
            "url": "https://drive.google.com/file/d/1pWEp6EDxOORUm-QFubtYhUqYKT7WrtXQ/view?usp=drive_link",
            "title": "คุณลักษณะอุปกรณ์ล๊อกล้อรถยนต์ขนาดเส้นผ่าศูนย์กลางไม่เกิน 25 นิ้ว"
          },
          {
            "title": "แนวทางตามระเบียบสำนักงานตำรวจแห่งชาติ เรื่องหลักเกณฑ์ในการเคลื่อนย้าย การใช้อุปกรณ์ไม่ให้เครื่องย้ายรถที่หยุด หรือจอดอันเป็นการฝ่าฝืนกฎหมายว่าด้วยการจราจรทางบก พ.ศ.2564",
            "url": "https://drive.google.com/file/d/1nBgSHoEYYaeHAGhrIUDB57ftE-nP40z6/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1kabhfozeGlXdfZptz0SzrgJTP-vDLvf1/view?usp=sharing",
            "title": "คำสั่งสำนักงานตำรวจแห่งชาติ ที่ 375/2542 เรื่อง มอบอำนาจในการอนุมัติจ่ายเงินหรือก่อหนี้ผูกพัน ค่าใช้จ่ายเกี่ยวกับการเคลื่อนย้ายหรือใช้เครื่องมือไม่ให้รถเคลื่อนย้ายและค่าดูแลรักษารถ"
          },
          {
            "title": "ระเบียบกระทรวงการคลังว่าด้วยการเบิกจ่ายเงินตอบแทนการปฏิบัติงานนอกเวลาราชการ พ.ศ.2550",
            "url": "https://drive.google.com/file/d/1Terpmu8kEdEQoDsAA2ncfzSQ1j409ftP/view?usp=sharing"
          },
          {
            "title": "ระเบียบการเบิกจ่ายเงินจากคลัง การเก็บรักษาเงินและการนำเงินส่งคลัง พ.ศ.2551",
            "url": "https://drive.google.com/file/d/1Psf5tJ0LkyzQU8hDRB_AJFJFsHWeOe9l/view?usp=sharing"
          },
          {
            "title": "ระเบียบสำนักงานตำรวจแห่งชาติ เรื่อง หลักเกณฑ์ การรับ การเก็บรักษา ค่าใช้จ่ายเกี่ยวกับการเคลื่อนย้ายหรือใช้เครื่องมือไม่ให้รถเคลื่อนย้าย ตลอดจนค่าดูแลรักษารถระหว่างอยู่ในความครอบครองของเจ้าพนักงานจราจร หรือพนักงานเจ้าหน้าที่ (ฉบับที่ 2) พ.ศ.2542 ",
            "url": "https://drive.google.com/file/d/1L6M4gSIM-BOA8-tiC_QH1YmI7tmBKIDH/view?usp=sharing"
          },
          {
            "title": "ระเบียบการเก็ยรักษาเงิน และการนำเงินส่งคลังในหน้าที่ของอำเภอ และกิ่งหน้าที่ พ.ศ.2520",
            "url": "https://drive.google.com/file/d/1CAyOiyP-Rgp60tdwdf82Y2wo2YCp-Pjy/view?usp=sharing"
          },
          {
            "url": "https://drive.google.com/file/d/1sFITLUIc5SZxZvJAu4-Vj0ZLLWh7ogz-/view?usp=sharing",
            "title": "ประกาศหัวหน้าเจ้าพนักงานจราจร กองกำกับการ 1  กองบังคับการตำรวจจราจร  เรื่อง กำหนดพื้นที่ใช้เครื่องมือบังคับล้อไม่ให้เคลื่อนย้ายรถ พ.ศ. 2565"
          },
          {
            "url": "https://drive.google.com/file/d/1I-_AKgc696G1QAPIuXqhm6Y7rRYpivD4/view?usp=sharing",
            "title": "ประกาศหัวหน้าเจ้าพนักงานจราจร กองกำกับการ 1  กองบังคับการตำรวจจราจร เรื่อง กำหนดพื้นที่ใช้เครื่องมือบังคับล้อไม่ให้เคลื่อนย้ายรถ  (ฉบับที่ 2) พ.ศ. 2566"
          }
        ]
      }
    ],
    "icon": "🔧"
  },
  {
    "description": "คลังข้อสอบและผลการทดสอบความรู้สำหรับตำรวจสายงานจราจร",
    "title": "การสอบสายงานจราจร",
    "sections": [
      {
        "docs": [
          {
            "title": "คลังข้อสอบสายงานจราจร",
            "url": "https://www.tpot.police.go.th/"
          }
        ],
        "title": "คลังข้อสอบ"
      }
    ],
    "id": "exam",
    "color": "#880E4F",
    "icon": "📝"
  },
  {
    "title": "เทศกาล",
    "description": "แนวทางการปฏิบัติงานในช่วงเทศกาลและวันหยุดพิเศษ",
    "icon": "🎊",
    "id": "festival",
    "sections": [
      {
        "title": "สงกรานต์ 2569",
        "docs": [
          {
            "title": "แผนปฏิบัติการด้านจราจรช่วงเทศกาลสงกรานต์ 2569",
            "url": "https://drive.google.com/drive/folders/1zYGcsiaceQZHCXsWdCfzsFqyLahJd7kY?usp=drive_link"
          },
          {
            "title": "การถอดบทเรียนและสรุปผลการดำเนินงาน ช่วงสงกรานต์ 2569",
            "url": "https://drive.google.com/file/d/1hgSwyA5hY5G34lfLcD9DzTbPJ1Lac8pm/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/1k3gst_gRXO3FHltNJQDpvUr_qfqBCoPN/view?usp=drive_link",
            "title": "สรุปสถิติอุบัติเหตุ 7 วันอันตราย ช่วงสงกรานต์ 2569"
          }
        ]
      }
    ],
    "color": "#AD1457"
  },
  {
    "description": "ข้อมูลทั่วไปเกี่ยวกับกองบังคับการตำรวจจราจร",
    "title": "ข้อมูลทั่วไป",
    "color": "#455A64",
    "id": "general",
    "sections": [
      {
        "docs": [
          {
            "title": "ระเบียบเครื่องแบบตำรวจจราจรชุดสนาม",
            "url": "https://drive.google.com/file/d/1DBXMOIVSP42KOO8X2g9IdkmDTz5GE3zm/view?usp=drive_link"
          },
          {
            "url": "",
            "title": "ระเบียบเครื่องแบบตำรวจจราจรชุดปกติและชุดคอแบะ"
          }
        ],
        "title": "เครื่องแบบและอัตรากำลังพล"
      },
      {
        "title": "โปรแกรมที่เกี่ยวข้อง",
        "docs": [
          {
            "url": "",
            "title": "รายการโปรแกรมและแอปพลิเคชันที่ใช้ในงานจราจร"
          }
        ]
      }
    ],
    "icon": "ℹ️"
  },
  {
    "title": "ควันดำ",
    "faq": [],
    "description": "กฎหมาย ระเบียบ วิธีการตรวจ ค่ามาตรฐาน ควันดำ ",
    "icon": "🛻",
    "color": "#3f4b43",
    "sections": [
      {
        "title": "กฎหมายที่เกี่ยวควันดำ",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/12rXgSPy9sFcOb3aoNYbZUBdm6RmCWrbG/view?usp=drive_link",
            "title": "พ.ร.บ.จราจรทางบก มาตรา 10 ทวิ(ข้อหาควันดำ)"
          },
          {
            "title": "ค่าปรับ พ.ร.บ.จราจรทางบกมาตรา10 ทวิ(ค่าปรับควันดำ)",
            "url": "https://drive.google.com/file/d/1gHA0o-n39wMN6KB9UKb5R7OnkobHwaFV/view?usp=drive_link"
          },
          {
            "title": "ข้อกำหนดกรมตำรวจ เรื่องกำหนดมาตรฐานควันดำ(ข้อกำหนดให้ตำรวจจราจรใช้ค่าควันดำ)",
            "url": "https://drive.google.com/file/d/1J6-JJUIr-D9sQUBNufNDBS7dhBFh4-mu/view?usp=drive_link"
          },
          {
            "title": "มาตรา 143 ตาม พรบ.จราจรทางบก (ฉบับที่13) พ.ศ.2565(คำสั่งระงับใช้รถชั่วคราว)",
            "url": "https://drive.google.com/file/d/14MfEptFS8K2xlNMGJJC5qgS36HJLFMNl/view?usp=drive_link"
          },
          {
            "title": "ระเบียบว่าด้วยหลักเกณฑ์และเงื่อนไขการกำหนดสภาพของรถที่ไม่มั่นคงแข็งแรงหรืออาจเกิดอันตราย พ.ศ.2566",
            "url": "https://drive.google.com/file/d/1tXE1PR8ql-7mqsb8-Hs_Mx90CKady5Hf/view?usp=drive_link"
          },
          {
            "title": "ประกาศสำนักงานตำรวจแห่งชาติ เรื่องแบบคำสั่งและตำแหน่งเครื่องหมายแสดงคำสั่งห้ามใช้รถและคำสั่งระงับการใช้เป็นการชั่วคราว ตามพรบ.จราจรทางบก พ.ศ.2522 พ.ศ.2566",
            "url": "https://drive.google.com/file/d/1qBmniK-0zGCJ-jhiT_TE3sYJdaLvcD0R/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/1LR6djsEfua3FcmXk5wNjwRx3uDn6pVEm/view?usp=drive_link",
            "title": "แผนผังขั้นตอนการตรวจวัด(ข้อหาควันดำ)"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1NRBtAM0kh65GZKK_rZh3rGv7cROJhMdE/view?usp=drive_link",
            "title": "กำหนดมาตรฐานค่าควันดำ วิธีการตรวควันดำ พ.ศ.2568"
          },
          {
            "url": "https://drive.google.com/file/d/1pQHQIpJcPryWCi1EdqfAfTvFrLbUUu2-/view?usp=drive_link",
            "title": "กฎกระทรวง เรื่อง กำหนดหลักเกณฑ์ วิธีการ และเงื่อนไข ในการออกคำสั่ง ยกเลิกคำสั่ง การทำและการยกเลิกการทำเครื่องหมาย ห้ามใช้ยานพาหนะ และการใช้ยานพาหนะ ในขณะที่มีเครื่องหมายห้ามใช้ยานพาหนะ พ.ศ. 2550"
          },
          {
            "title": "ประกาศกรมควบคุมมลพิษ เรื่อง แบบเครื่องหมาย และแบบคำสั่งของพนักงานเจ้าหน้าที่ตามพระราชบัญญัติส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ พ.ศ. 2535",
            "url": "https://drive.google.com/file/d/1imQnheMEL_H2RvCV8q2TDhh_h3duVrXw/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/1E-t9NL4K9UJND4cB0uMWB4nuyCWxhcc9/view?usp=drive_link",
            "title": "ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง แต่งตั้งพนักงานเจ้าหน้าที่ตาม พระราชบัญญัติส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ พ.ศ.2535"
          }
        ],
        "title": "ค่ามาตรฐาน วิธีการตรวจวัดควันดำ"
      },
      {
        "docs": [
          {
            "title": "คู่มือการตรวจควันดำ",
            "url": "https://drive.google.com/file/d/1mxyZMlJD_mR90cdpKKNjygLkOSn8TfTm/view?usp=drive_link"
          }
        ],
        "title": "คู่มือการตรวจสอบควันดำ ตาม พรบ.ส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ พ.ศ.2535"
      },
      {
        "title": "คำพิพากษา ข้อหาควันดำ",
        "docs": [
          {
            "title": "คำพิพากษาควันดำ",
            "url": "https://drive.google.com/file/d/1Bk-QOUVUjqjubnBZLI-CTZBiWqb0bb8J/view?usp=drive_link"
          }
        ]
      },
      {
        "title": "หนังสือขอสนับสนุนเจ้าหน้าที่ตั้งจุดตรวจควันดำและท่อเสียงดัง",
        "docs": [
          {
            "title": "หนังสือขอสนับสนุนเจ้าหน้าที่ กรมควบคุมมลพิษ",
            "url": "https://drive.google.com/file/d/1GFNDELcRcI81Ty6llbMgDi363q-2HFmC/view?usp=drive_link"
          }
        ]
      },
      {
        "docs": [
          {
            "title": "พระราชบัญญัติการขนส่งทางบก พ.ศ.2522",
            "url": "https://drive.google.com/file/d/1Bb8Bl9aIBdZ5KQABpwXYXbU7RDKiJGTm/view?usp=drive_link"
          },
          {
            "title": "ประกาศกรมการขนส่งทางบก เรื่องกำหนดเกณฑ์มาตรฐานและวิธีการตรวจวัดค่าควันดำจากท่อไอเสีย",
            "url": "https://drive.google.com/file/d/1cvw2_6LJ2nml7pxqvzEbdvk9fFjUUzbr/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/19GixUvq5vJHlYOfaWYiAGscp7y_Noupe/view?usp=drive_link",
            "title": "ประกาศกระทรวงคมนาคม เรื่อง กำหนดให้ข้าราชการตำรวจเป็นเจ้าหน้าที่ของรัฐผู้มีอำนาจปรับเป็นพินัย"
          }
        ],
        "title": "พรบ.ขนส่งทางบก 2522"
      },
      {
        "docs": [
          {
            "url": "https://youtu.be/XCCDtFeN6eM?si=Zf7epdbg5kxNsyG4",
            "title": "การใช้งานเครื่องตรวจวัดควันดำ Wager RHW"
          },
          {
            "url": "https://drive.google.com/file/d/1FtpEDrzhbfzTL94e4CJkr2yX9lo1204y/view?usp=drive_link",
            "title": "วิดีโอสอนการใช้านเครื่องตรวจวัดควันดำ"
          },
          {
            "title": "วิธีเปลี่ยนช่องรับสัญญาณ กรณีต้องใช้งาน2เครื่องบริเวณใกล้กัน โค้ดอักษรให้กด คือ AZTULQ จากนั้นกด E",
            "url": "https://drive.google.com/file/d/1z04ATbp-oFk9AT_VJqqoBYJG1UVLVuPy/view?usp=drive_link"
          },
          {
            "url": "https://docs.google.com/presentation/d/1TNyTsylIGqlb2X_skE5GrtCf8cnTima8/edit?usp=drive_link&ouid=105172695432078224553&rtpof=true&sd=true",
            "title": "ขั้นตอนการใช้งานเครื่องตรวจวัดควันดำ"
          }
        ],
        "title": "การใช้งานเครื่องตรวจวัดควันดำ Wager RHW"
      }
    ],
    "id": "cat_1778222452627"
  },
  {
    "sections": [
      {
        "title": "กฎหมายท่อเสียงดังตาม พรบ.จราจรทางบก พ.ศ.2522",
        "docs": [
          {
            "title": "พ.ร.บ.จราจรทางบก มาตรา 10 ทวิ",
            "url": "https://drive.google.com/file/d/12rXgSPy9sFcOb3aoNYbZUBdm6RmCWrbG/view?usp=drive_link"
          },
          {
            "title": "ค่าปรับ พ.ร.บ.จราจรทางบกมาตรา10 ทวิ",
            "url": "https://drive.google.com/file/d/1gHA0o-n39wMN6KB9UKb5R7OnkobHwaFV/view?usp=drive_link"
          },
          {
            "url": "https://drive.google.com/file/d/1J6-JJUIr-D9sQUBNufNDBS7dhBFh4-mu/view?usp=drive_link",
            "title": "ข้อกำหนดกรมตำรวจ เรื่องกำหนดมาตรฐานเสียงดัง"
          },
          {
            "url": "https://drive.google.com/file/d/14MfEptFS8K2xlNMGJJC5qgS36HJLFMNl/view?usp=drive_link",
            "title": "มาตรา 143 ตาม พรบ.จราจรทางบก (ฉบับที่13) พ.ศซ.2565"
          },
          {
            "url": "https://drive.google.com/file/d/1tXE1PR8ql-7mqsb8-Hs_Mx90CKady5Hf/view?usp=drive_link",
            "title": "ระเบียบว่าด้วยหลักเกณฑ์และเงื่อนไขการกำหนดสภาพของรถที่ไม่มั่นคงแข็งแรงหรืออาจเกิดอันตราย พ.ศ.2566"
          },
          {
            "url": "https://drive.google.com/file/d/1qBmniK-0zGCJ-jhiT_TE3sYJdaLvcD0R/view?usp=drive_link",
            "title": "ประกาศสำนักงานตำรวจแห่งชาติ เรื่องแบบคำสั่งและตำแหน่งเครื่องหมายแสดงคำสั่งห้ามใช้รถและคำสั่งระงับการใช้เป็นการชั่วคราว ตามพรบ.จราจรทางบก พ.ศ.2522 พ.ศ.2566"
          }
        ]
      },
      {
        "docs": [
          {
            "title": "ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่องกำหนดมาตรฐานระดับเสียงของรถสามล้อ",
            "url": "https://drive.google.com/file/d/15wuenMTKsTcKb5-XiFQiY_xtfuRZZWlb/view?usp=drive_link"
          }
        ],
        "title": "ท่อเสียงดัง รถสามล้อ ค่าเสียงดังและวิธีการตรวจ"
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1_ZJwOmc0DwKNJ3xoA5pZQosv7lqfcbQZ/view?usp=drive_link",
            "title": "ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่องกำหนดมาตรฐานระดับเสียงของรถยนต์"
          },
          {
            "title": "คู่มือการตรวจวัดระดับเสียงของรถยนต์",
            "url": "https://drive.google.com/file/d/1jhBXpjnXqGg29JcRJq7qaBtlj7-F_L5c/view?usp=drive_link"
          }
        ],
        "title": "ท่อเสียงดัง รถยนต์ ค่าเสียงดังและวิธีการตรวจ"
      },
      {
        "title": "ท่อเสียงดัง รถจักรยานยนต์ ค่าเสียงดังและวิธีการตรวจ",
        "docs": [
          {
            "url": "https://drive.google.com/drive/folders/1YcFn4bLgopVmN1KQWcdC_uQ6-S37yAKW?usp=drive_link",
            "title": "ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่องกำหนดมาตรฐานระดับเสียงของรถจักรยายนต์"
          },
          {
            "url": "https://drive.google.com/drive/folders/1j2PKnXuKrayN5BYZvWfnC8sl5HM2AWrL?usp=drive_link",
            "title": "คู่มือการตรวจวัดระดับเสียงของรถจักรยายนต์"
          }
        ]
      },
      {
        "title": "ข้อกฏหมายอื่นที่เกี่ยวกับท่อเสียงดัง การออกคำสั่งห้ามใช้ชั่วคราว ห้ามใช้เด็ดขาด",
        "docs": [
          {
            "title": "กฎกระทรวง เรื่อง กำหนดหลักเกณฑ์ วิธีการ และเงื่อนไข ในการออกคำสั่ง ยกเลิกคำสั่ง การทำและการยกเลิกการทำเครื่องหมาย ห้ามใช้ยานพาหนะ และการใช้ยานพาหนะ ในขณะที่มีเครื่องหมายห้ามใช้ยานพาหนะ พ.ศ. 2550",
            "url": "https://drive.google.com/file/d/1pQHQIpJcPryWCi1EdqfAfTvFrLbUUu2-/view?usp=drive_link"
          },
          {
            "title": "ประกาศกรมควบคุมมลพิษ เรื่อง แบบเครื่องหมาย และแบบคำสั่งของพนักงานเจ้าหน้าที่ตามพระราชบัญญัติส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ พ.ศ. 2535",
            "url": "https://drive.google.com/file/d/1imQnheMEL_H2RvCV8q2TDhh_h3duVrXw/view?usp=drive_link"
          },
          {
            "title": "ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง แต่งตั้งพนักงานเจ้าหน้าที่ตาม พระราชบัญญัติส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ พ.ศ.2535",
            "url": "https://drive.google.com/file/d/1E-t9NL4K9UJND4cB0uMWB4nuyCWxhcc9/view?usp=drive_link"
          }
        ]
      }
    ],
    "id": "cat_1778224770530",
    "color": "#a01313",
    "icon": "🏍",
    "description": "กฎหมาย ระเบียบ วิธีการตรวจ ค่ามาตรฐาน ท่อเสียงดัง",
    "faq": [],
    "title": "ท่อเสียงดัง"
  },
  {
    "icon": "📋",
    "color": "#1565c0",
    "sections": [
      {
        "title": "พ.ร.บ.การแพทย์ฉุกเฉิน พ.ศ.2551",
        "docs": [
          {
            "title": "พ.ร.บ.การแพทย์ฉุกเฉิน พ.ศ.2551",
            "url": "https://drive.google.com/file/d/1hRo-vaYsvTGaxuLnYRuD2uXbG8Xd4Ky0/view?usp=drive_link"
          }
        ]
      },
      {
        "title": "พ.ร.บ.ความรับผิดทางละเมิดของเจ้าหน้าที่ พ.ศ.2539",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/188D-HtWzxTdb3NNroCpvYXeO32dkmlre/view?usp=drive_link",
            "title": "พ.ร.บ.ความรับผิดทางละเมิดของเจ้าหน้าที่ พ.ศ.2539"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/18G-rJKQZnIA8Aahl8PHU8QlMI8hpkMIr/view?usp=sharing",
            "title": "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562"
          }
        ],
        "title": "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562"
      },
      {
        "title": "ระเบียบสภากาชาดไทย ว่าด้วยศูนย์รับบริจาคอวัยวะสภากาชาดไทย พ.ศ.2545",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1Rzx6AvOO5IM69D0A8x0QrlhK6nRTOT7u/view?usp=sharing",
            "title": "ระเบียบสภากาชาดไทย ว่าด้วยศูนย์รับบริจาคอวัยวะสภากาชาดไทย พ.ศ.2545"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/16Op8je_DJlhb7_jTi0xHQEkQVf3vOk8V/view?usp=sharing",
            "title": "แนวทางปฏิบัติการรับรองรถบริการการแพทย์ฉุกเฉิน"
          }
        ],
        "title": "แนวทางปฏิบัติการรับรองรถบริการการแพทย์ฉุกเฉิน"
      }
    ],
    "id": "cat_1778472905062",
    "title": "ระเบียบและกฎหมายคุ้มครองการปฏิบัติภารกิจฉุกเฉิน",
    "faq": [],
    "description": ""
  },
  {
    "icon": "📋",
    "id": "cat_1778480679398",
    "sections": [
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1u0DV0j4btNEs3ngewm5fmbMuIPf-m4fW/view?usp=drive_link",
            "title": "วิธีการทำ CPR ด้วยหลัก 6 ป."
          }
        ],
        "title": "วิธีการทำ CPR ด้วยหลัก 6 ป."
      },
      {
        "title": "ขั้นตอนการเคลื่อนย้ายผู้ป่วย",
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1EEV87amIbgdZvAev18k0U8TNwAVhyPra/view?usp=drive_link",
            "title": "ขั้นตอนการเคลื่อนย้ายผู้ป่วย"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1_YvW6-a5O5CKbWYjy9ohE_xr0RgOP2vR/view?usp=drive_link",
            "title": "การดูแลรักษารถยนต์เบื้องต้น"
          }
        ],
        "title": "การดูแลรักษารถยนต์เบื้องต้น"
      },
      {
        "title": "ขั้นตอนการช่วยเหลืออาการชักเกร็ง",
        "docs": [
          {
            "addedAt": "2026-06-09T08:14:48.394Z",
            "title": "ขั้นตอนการช่วยเหลืออาการชักเกร็ง",
            "url": "https://drive.google.com/file/d/1PRAQqdSMQNpQL-qiLHCNux19BsV7DR9c/view?usp=drive_link"
          }
        ]
      },
      {
        "docs": [
          {
            "addedAt": "2026-06-09T08:16:44.854Z",
            "title": "วิธีขอความช่วยเหลือฉุกเฉิน",
            "url": "https://drive.google.com/file/d/1SMOA16Edv2uExVcIEJZcpXNZTFEn-kvY/view?usp=sharing"
          }
        ],
        "title": "วิธีขอความช่วยเหลือฉุกเฉิน"
      },
      {
        "title": "วิธีสังเกตอาการเส้นเลือดในสมองตีบ ตัน (Stroke)",
        "docs": [
          {
            "title": "วิธีสังเกตอาการเส้นเลือดในสมองตีบ ตัน (Stroke)",
            "url": "https://drive.google.com/file/d/1iS6EI-uYy7pnYthn2ujg4AW8N1NLopnb/view?usp=sharing",
            "addedAt": "2026-06-09T08:18:23.988Z"
          }
        ]
      },
      {
        "docs": [
          {
            "addedAt": "2026-06-09T08:19:27.386Z",
            "title": "วิธีปฐมพยาบาลฉุกเฉินเมื่อถูกงูกัด",
            "url": "https://drive.google.com/file/d/1BuyZE4UZ7msl1lPMJR8DPvbb7YAcMRTT/view?usp=sharing"
          }
        ],
        "title": "วิธีปฐมพยาบาลฉุกเฉินเมื่อถูกงูกัด"
      },
      {
        "title": "ขั้นตอนการช่วยเหลือรถประจำทางเบรคล็อค",
        "docs": [
          {
            "addedAt": "2026-06-09T08:20:28.359Z",
            "url": "https://drive.google.com/file/d/1f9B4KRuMTKH6bZtgapgOpM6KDDnqrRWG/view?usp=sharing",
            "title": "ขั้นตอนการช่วยเหลือรถประจำทางเบรคล็อค"
          }
        ]
      },
      {
        "title": "การปฐมพยาบาลฉุกเฉิน(ภาวะชัก)",
        "docs": [
          {
            "addedAt": "2026-06-09T08:21:20.586Z",
            "title": "การปฐมพยาบาลฉุกเฉิน(ภาวะชัก)",
            "url": "https://drive.google.com/file/d/1yyGx5JgDoru3T4r5ym9at5PLcZfj26jS/view?usp=sharing"
          }
        ]
      },
      {
        "docs": [
          {
            "title": "ขั้นตอนการเข้าช่วยเหลืออุบัติเหตุ",
            "url": "https://drive.google.com/file/d/1ZtFZr3QIr7TiReSsC-rUeKKUZFCeg13F/view?usp=sharing",
            "addedAt": "2026-06-09T08:22:14.611Z"
          }
        ],
        "title": "ขั้นตอนการเข้าช่วยเหลืออุบัติเหตุ"
      },
      {
        "title": "ขั้นตอนการปฐมพยาบาล (Choking)",
        "docs": [
          {
            "addedAt": "2026-06-09T08:23:05.023Z",
            "url": "https://drive.google.com/file/d/12JwgX_AOXLHTdOTNFEfP4Crt5AX9CfeX/view?usp=sharing",
            "title": "ขั้นตอนการปฐมพยาบาล (Choking)"
          }
        ]
      },
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1u0zArh1LbSlQGwl2wVK9JIe5aiLBI2qW/view?usp=sharing",
            "title": "คู่มือการข้ามทางรถไฟอย่างปลอดภัย",
            "addedAt": "2026-06-09T08:23:44.683Z"
          }
        ],
        "title": "คู่มือการข้ามทางรถไฟอย่างปลอดภัย"
      }
    ],
    "color": "#1565c0",
    "title": "มาตรฐานการปฏิบัติภารกิจฉุกเฉิน",
    "description": "",
    "faq": []
  },
  {
    "faq": [],
    "description": "เมื่อเกิดอุบัติเหตุรถเฉี่ยวชนกัน ซึ่งผู้ขับขี่ทั้งสองฝ่ายให้ข้อมูลที่แตกแต่างกัน และไม่สามารถตกลงกันได้ จำเป็นที่ต้องทำสำนวนสอบสวนส่งต่อไปให้อัยการ การตรวจสภาพรถที่เกิดเหตุจึงเป็นเอกสารสำคัญที่ถูกกำหนดให้มีในสำนวนการสอบสวนด้วย",
    "title": "การตรวจสภาพรถที่เกิดอุบัติเหตุ",
    "color": "#21c115",
    "id": "cat_1778734516694",
    "sections": [
      {
        "title": "ระเบียบที่เกี่ยวข้อง",
        "docs": [
          {
            "title": "ประมวลระเบียบการตำรวจเกี่ยวกับคดี (การกำหนดเกี่ยวกับการตรวจสภาพรถที่เกิดอุบัติเหตุ)",
            "url": "https://drive.google.com/file/d/1KqcIejQvC-4QjVF861HKPhjG7FuTUFGq/view?usp=drive_link"
          }
        ]
      },
      {
        "docs": [
          {
            "title": "หนังสือของพนักงานสอบสวน",
            "url": "https://docs.google.com/document/d/12kBilb3qlWwkO_mK7W9yacP5KJB9IAJr/edit?usp=sharing&ouid=114233845228112026614&rtpof=true&sd=true"
          }
        ],
        "title": "ตัวอย่างหนังสือของพนักงานสอบสวน ส่งเรื่องและรถมาตรวจ"
      },
      {
        "docs": [
          {
            "title": "ที่ตั้ง อาคารประสารราชกิจ",
            "url": "https://maps.app.goo.gl/gjHvvLRAXarX36mn6"
          }
        ],
        "title": "แผนที่ ประกอบการเดินมาที่ตั้ง (อาคารประสารราชกิจ"
      }
    ],
    "icon": "📋"
  },
  {
    "title": "คลังข้อมูลการเรียนรู้การใช้รถใช้ถนนสำหรับเด็กและเยาวชน",
    "description": "หลักสูตรส่งเสริมความปลอดภัยในการใช้รถใช้ถนน  ",
    "faq": [],
    "icon": "📖",
    "id": "cat_1778835101454",
    "sections": [
      {
        "title": "หลักสูตรการเรียนรู้การใช้รถใช้ถนน",
        "docs": [
          {
            "title": "ระดับอนุบาล-หลักสูตรส่งเสริมความปลอดภัยในการใช้รถใช้ถนน",
            "url": "https://drive.google.com/file/d/11ICBZ7ErkWn0Cg70SkGRloOEtyMfETGz/view?usp=sharing"
          },
          {
            "title": "ระดับประถม-หลักสูตรส่งเสริมความปลอดภัยในการใช้รถใช้ถนน",
            "url": "https://drive.google.com/file/d/1EthXRCIj8Jiw5bJgX8KlYHqi3Vktp_0c/view?usp=sharing"
          },
          {
            "url": "https://kidsoer.safedrivedlt.com/e-book/kid-secondary/",
            "title": "ระดับมัธยม-หลักสูตรส่งเสริมความปลอดภัยในการใช้รถใช้ถนน"
          }
        ]
      }
    ],
    "color": "#f27907"
  },
  {
    "color": "#1565c0",
    "sections": [
      {
        "docs": [
          {
            "url": "https://drive.google.com/file/d/1klDYGbvTmOItJRhrc-oai-Vymg9anYWa/view?usp=drive_link",
            "title": "เกณฑ์การประเมินสุภาพบุรุษจราจร ปี 2569"
          }
        ],
        "title": "เกณฑ์การประเมินสุภาพบุรุษจราจร ปี 2569"
      }
    ],
    "id": "cat_1779893686339",
    "icon": "👮",
    "faq": [],
    "description": "เกณฑ์การประเมินสุภาพบุรุษจราจร ปี 2569",
    "title": "โครงการสุภาพบุรุษจราจร"
  },
  {
    "color": "#1565c0",
    "sections": [],
    "id": "cat_1781067805649",
    "icon": "📋",
    "faq": [],
    "description": "",
    "title": "งานจราจรโครงการพระราชดำริ"
  }
];

// ฟังก์ชันสำหรับโหลด/บันทึกข้อมูลที่ถูกแก้ไขจาก localStorage
function loadData() {
  const saved = localStorage.getItem('trafficPoliceData');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch(e) {
      return CATEGORIES;
    }
  }
  return CATEGORIES;
}

function saveData(data) {
  localStorage.setItem('trafficPoliceData', JSON.stringify(data));
}
