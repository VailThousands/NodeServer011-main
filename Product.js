'use strict';

const products = [
  {
    id: 'wireless-gaming-mouse', name: 'เมาส์เกมมิ่งไร้สาย', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 1290, emoji: '🖱️', badge: 'ขายดี', shortDescription: 'แม่นยำ น้ำหนักเบา ใช้งานคล่องตัว',
    description: 'เมาส์ไร้สายสำหรับเล่นเกมและทำงานประจำวัน ออกแบบให้จับถนัดมือและเคลื่อนไหวได้คล่องตัว',
    specs: ['การเชื่อมต่อ: ไร้สาย', 'รูปแบบ: เมาส์สำหรับเล่นเกม', 'เหมาะสำหรับ: เล่นเกมและทำงาน']
  },
  {
    id: 'mechanical-keyboard', name: 'คีย์บอร์ด Mechanical', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 2490, emoji: '⌨️', badge: 'ยอดนิยม', shortDescription: 'สัมผัสการพิมพ์สนุกและแม่นยำ',
    description: 'คีย์บอร์ด Mechanical สำหรับพิมพ์งานและเล่นเกม ให้สัมผัสการกดที่ชัดเจนและใช้งานได้หลากหลาย',
    specs: ['รูปแบบ: Mechanical', 'การเชื่อมต่อ: USB', 'เหมาะสำหรับ: พิมพ์งานและเล่นเกม']
  },
  {
    id: 'stereo-headphones', name: 'หูฟังสเตอริโอ', category: 'audio', categoryLabel: 'เสียงและสตรีมมิง',
    price: 1790, emoji: '🎧', badge: 'เสียงชัด', shortDescription: 'ฟังเพลง ประชุม หรือเล่นเกมได้เต็มอารมณ์',
    description: 'หูฟังสเตอริโอสำหรับฟังเพลง ประชุมออนไลน์ และเล่นเกม พร้อมสวมใส่ได้ในชีวิตประจำวัน',
    specs: ['ระบบเสียง: สเตอริโอ', 'การเชื่อมต่อ: สายสัญญาณ', 'เหมาะสำหรับ: ฟังเพลง ประชุม และเล่นเกม']
  },
  {
    id: 'ssd-nvme-1tb', name: 'SSD NVMe 1TB', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 2190, emoji: '💾', badge: 'อัปเกรดง่าย', shortDescription: 'เพิ่มพื้นที่และความคล่องตัวให้เครื่อง',
    description: 'อุปกรณ์จัดเก็บข้อมูลความจุ 1TB สำหรับเพิ่มพื้นที่ให้คอมพิวเตอร์และเก็บไฟล์งานหรือเกม',
    specs: ['ประเภท: NVMe SSD', 'ความจุ: 1TB', 'เหมาะสำหรับ: อัปเกรดพื้นที่จัดเก็บข้อมูล']
  },
  {
    id: 'led-monitor', name: 'จอภาพ LED', category: 'display', categoryLabel: 'จอและอุปกรณ์เสริม',
    price: 4590, emoji: '🖥️', badge: 'โต๊ะทำงาน', shortDescription: 'พื้นที่ภาพกว้างสำหรับงานและความบันเทิง',
    description: 'จอภาพ LED สำหรับจัดโต๊ะทำงานหรือใช้รับชมความบันเทิงที่บ้าน',
    specs: ['ประเภทจอ: LED', 'การเชื่อมต่อ: HDMI', 'เหมาะสำหรับ: ทำงานและความบันเทิง']
  },
  {
    id: 'wireless-controller', name: 'จอยเกมไร้สาย', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 1590, emoji: '🎮', badge: 'เล่นสบาย', shortDescription: 'จับถนัดมือ พร้อมลุยทุกเกมโปรด',
    description: 'คอนโทรลเลอร์ไร้สายสำหรับเล่นเกม ให้ความคล่องตัวโดยไม่ต้องต่อสายระหว่างใช้งาน',
    specs: ['การเชื่อมต่อ: ไร้สาย', 'รูปแบบ: Game controller', 'เหมาะสำหรับ: เล่นเกม']
  },
  {
    id: 'usb-microphone', name: 'ไมโครโฟน USB', category: 'audio', categoryLabel: 'เสียงและสตรีมมิง',
    price: 1890, emoji: '🎙️', badge: 'สร้างคอนเทนต์', shortDescription: 'พร้อมประชุม สตรีม และบันทึกเสียง',
    description: 'ไมโครโฟน USB สำหรับประชุมออนไลน์ สตรีม และบันทึกเสียง เชื่อมต่อกับคอมพิวเตอร์ได้โดยตรง',
    specs: ['การเชื่อมต่อ: USB', 'รูปแบบ: ไมโครโฟนตั้งโต๊ะ', 'เหมาะสำหรับ: ประชุม สตรีม และบันทึกเสียง']
  },
  {
    id: 'ddr5-memory', name: 'RAM DDR5', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 3290, emoji: '🧩', badge: 'อัปเกรดเครื่อง', shortDescription: 'เพิ่มความลื่นไหลให้กับงานหลายอย่าง',
    description: 'หน่วยความจำ DDR5 สำหรับอัปเกรดคอมพิวเตอร์เดสก์ท็อปและรองรับการทำงานหลายอย่างพร้อมกัน',
    specs: ['ประเภท: DDR5', 'รูปแบบ: หน่วยความจำคอมพิวเตอร์', 'เหมาะสำหรับ: อัปเกรดคอมพิวเตอร์']
  },
  {
    id: 'wired-gaming-mouse', name: 'เมาส์เกมมิ่งแบบมีสาย', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 790, emoji: '🖱️', badge: 'เริ่มต้นคุ้มค่า', shortDescription: 'เมาส์มีสายสำหรับเล่นเกมและทำงานทั่วไป',
    description: 'เมาส์เกมมิ่งแบบมีสายสำหรับผู้ที่ต้องการใช้งานง่ายและไม่ต้องชาร์จแบตเตอรี่',
    specs: ['รูปแบบ: เมาส์มีสาย', 'เหมาะสำหรับ: เล่นเกมและทำงาน']
  },
  {
    id: 'gaming-mousepad', name: 'แผ่นรองเมาส์เกมมิ่ง', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 390, emoji: '🟩', badge: 'โต๊ะเกมมิ่ง', shortDescription: 'เพิ่มพื้นที่ขยับเมาส์บนโต๊ะของคุณ',
    description: 'แผ่นรองเมาส์สำหรับจัดพื้นที่โต๊ะทำงานหรือโต๊ะเล่นเกมให้เป็นสัดส่วน',
    specs: ['ประเภท: แผ่นรองเมาส์', 'เหมาะสำหรับ: โต๊ะทำงานและเล่นเกม']
  },
  {
    id: 'tkl-keyboard', name: 'คีย์บอร์ด TKL', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 1990, emoji: '⌨️', badge: 'ประหยัดพื้นที่', shortDescription: 'คีย์บอร์ดขนาดกะทัดรัดสำหรับโต๊ะที่เป็นระเบียบ',
    description: 'คีย์บอร์ดรูปแบบ TKL ที่ช่วยเพิ่มพื้นที่ว่างบนโต๊ะสำหรับเมาส์และอุปกรณ์อื่น',
    specs: ['รูปแบบ: TKL', 'เหมาะสำหรับ: โต๊ะทำงานขนาดกะทัดรัด']
  },
  {
    id: 'gaming-headset', name: 'หูฟังเกมมิ่งพร้อมไมโครโฟน', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 2290, emoji: '🎧', badge: 'เล่นเป็นทีม', shortDescription: 'ฟังเสียงและสื่อสารระหว่างเล่นเกม',
    description: 'ชุดหูฟังสำหรับเล่นเกมและสื่อสารกับเพื่อนร่วมทีมผ่านไมโครโฟนในตัว',
    specs: ['อุปกรณ์: หูฟังพร้อมไมโครโฟน', 'เหมาะสำหรับ: เล่นเกมและสนทนา']
  },
  {
    id: 'wireless-gamepad', name: 'จอยเกมไร้สาย รุ่นคอมแพกต์', category: 'gaming', categoryLabel: 'เกมมิ่งเกียร์',
    price: 1290, emoji: '🎮', badge: 'ไร้สาย', shortDescription: 'คอนโทรลเลอร์ขนาดกะทัดรัดสำหรับเล่นเกม',
    description: 'จอยเกมไร้สายสำหรับเล่นเกมบนอุปกรณ์ที่รองรับ เหมาะกับการเล่นที่ต้องการความคล่องตัว',
    specs: ['รูปแบบ: คอนโทรลเลอร์ไร้สาย', 'เหมาะสำหรับ: เล่นเกม']
  },
  {
    id: 'full-hd-webcam', name: 'เว็บแคม Full HD', category: 'display', categoryLabel: 'จอและอุปกรณ์เสริม',
    price: 1190, emoji: '📷', badge: 'ประชุมออนไลน์', shortDescription: 'เว็บแคมสำหรับประชุมและเรียนออนไลน์',
    description: 'เว็บแคมสำหรับวิดีโอคอล ประชุมออนไลน์ และเรียนทางไกล',
    specs: ['ความละเอียดตามชื่อรุ่น: Full HD', 'เหมาะสำหรับ: ประชุมออนไลน์และวิดีโอคอล']
  },
  {
    id: 'monitor-arm', name: 'ขาตั้งจอปรับระดับ', category: 'display', categoryLabel: 'จอและอุปกรณ์เสริม',
    price: 1390, emoji: '🖥️', badge: 'จัดโต๊ะใหม่', shortDescription: 'ช่วยจัดตำแหน่งจอให้เหมาะกับโต๊ะทำงาน',
    description: 'ขาตั้งจอสำหรับปรับพื้นที่และจัดระเบียบโต๊ะทำงานให้ใช้งานได้สะดวกขึ้น',
    specs: ['ประเภท: ขาตั้งจอ', 'โปรดตรวจสอบขนาดและน้ำหนักจอที่รองรับก่อนเลือกซื้อ']
  },
  {
    id: 'desk-light', name: 'โคมไฟตั้งโต๊ะ LED', category: 'display', categoryLabel: 'จอและอุปกรณ์เสริม',
    price: 790, emoji: '💡', badge: 'มุมทำงาน', shortDescription: 'เพิ่มแสงสว่างให้โต๊ะทำงานหรือโต๊ะอ่านหนังสือ',
    description: 'โคมไฟ LED สำหรับใช้งานบริเวณโต๊ะทำงาน โต๊ะอ่านหนังสือ หรือมุมทำกิจกรรม',
    specs: ['ประเภท: โคมไฟตั้งโต๊ะ LED', 'เหมาะสำหรับ: โต๊ะทำงานและอ่านหนังสือ']
  },
  {
    id: 'usb-c-hub', name: 'USB-C Hub', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 990, emoji: '🔌', badge: 'เพิ่มพอร์ต', shortDescription: 'ฮับเสริมพอร์ตสำหรับอุปกรณ์ที่รองรับ USB-C',
    description: 'อุปกรณ์ขยายพอร์ตสำหรับเชื่อมต่ออุปกรณ์เสริมกับคอมพิวเตอร์ที่รองรับ USB-C',
    specs: ['ประเภท: USB-C Hub', 'โปรดตรวจสอบพอร์ตและการรองรับของอุปกรณ์ก่อนเลือกซื้อ']
  },
  {
    id: 'laptop-stand', name: 'แท่นวางแล็ปท็อป', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 590, emoji: '💻', badge: 'จัดโต๊ะสบายตา', shortDescription: 'ยกแล็ปท็อปให้พ้นจากพื้นโต๊ะ',
    description: 'แท่นวางแล็ปท็อปสำหรับจัดมุมทำงานและเพิ่มพื้นที่ว่างบนโต๊ะ',
    specs: ['ประเภท: แท่นวางแล็ปท็อป', 'โปรดตรวจสอบขนาดอุปกรณ์ที่รองรับ']
  },
  {
    id: 'cpu-cooler', name: 'ชุดระบายความร้อน CPU', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 1290, emoji: '🌀', badge: 'ประกอบคอม', shortDescription: 'อุปกรณ์ระบายความร้อนสำหรับคอมพิวเตอร์เดสก์ท็อป',
    description: 'ชุดระบายความร้อนสำหรับประกอบหรืออัปเกรดคอมพิวเตอร์เดสก์ท็อป',
    specs: ['ประเภท: ชุดระบายความร้อน CPU', 'โปรดตรวจสอบซ็อกเก็ตและพื้นที่เคสก่อนเลือกซื้อ']
  },
  {
    id: 'pc-case', name: 'เคสคอมพิวเตอร์', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 1990, emoji: '🗄️', badge: 'ประกอบเครื่อง', shortDescription: 'เคสสำหรับจัดวางอุปกรณ์คอมพิวเตอร์เดสก์ท็อป',
    description: 'เคสคอมพิวเตอร์สำหรับประกอบเครื่องใหม่หรือจัดระเบียบอุปกรณ์ภายใน',
    specs: ['ประเภท: เคสคอมพิวเตอร์', 'โปรดตรวจสอบขนาดเมนบอร์ดและพื้นที่ติดตั้งก่อนเลือกซื้อ']
  },
  {
    id: 'power-supply', name: 'เพาเวอร์ซัพพลาย', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 2490, emoji: '🔋', badge: 'อุปกรณ์ประกอบคอม', shortDescription: 'แหล่งจ่ายไฟสำหรับคอมพิวเตอร์เดสก์ท็อป',
    description: 'เพาเวอร์ซัพพลายสำหรับใช้ประกอบหรือเปลี่ยนอุปกรณ์จ่ายไฟในคอมพิวเตอร์',
    specs: ['ประเภท: Power supply', 'โปรดตรวจสอบกำลังไฟและขนาดที่ต้องการก่อนเลือกซื้อ']
  },
  {
    id: 'motherboard', name: 'เมนบอร์ดเดสก์ท็อป', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 4290, emoji: '🧠', badge: 'หัวใจของเครื่อง', shortDescription: 'แผงวงจรหลักสำหรับประกอบคอมพิวเตอร์',
    description: 'เมนบอร์ดสำหรับประกอบคอมพิวเตอร์เดสก์ท็อป ควรตรวจสอบความเข้ากันได้กับ CPU และ RAM',
    specs: ['ประเภท: เมนบอร์ดเดสก์ท็อป', 'โปรดตรวจสอบซ็อกเก็ตและอุปกรณ์ที่รองรับก่อนเลือกซื้อ']
  },
  {
    id: 'sata-ssd-1tb', name: 'SSD SATA 1TB', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 1790, emoji: '💿', badge: 'เพิ่มพื้นที่เก็บข้อมูล', shortDescription: 'พื้นที่จัดเก็บข้อมูลสำหรับคอมพิวเตอร์',
    description: 'SSD ความจุ 1TB สำหรับจัดเก็บไฟล์งาน เกม และข้อมูลส่วนตัว',
    specs: ['ประเภท: SATA SSD', 'ความจุ: 1TB', 'โปรดตรวจสอบช่องเชื่อมต่อของอุปกรณ์ก่อนเลือกซื้อ']
  },
  {
    id: 'flash-drive-256gb', name: 'แฟลชไดรฟ์ 256GB', category: 'computer', categoryLabel: 'อุปกรณ์คอมพิวเตอร์',
    price: 690, emoji: '🔑', badge: 'พกพาสะดวก', shortDescription: 'จัดเก็บและพกพาไฟล์ระหว่างอุปกรณ์',
    description: 'แฟลชไดรฟ์ความจุ 256GB สำหรับจัดเก็บหรือเคลื่อนย้ายไฟล์',
    specs: ['ประเภท: แฟลชไดรฟ์', 'ความจุ: 256GB']
  },
  {
    id: 'desktop-speakers', name: 'ลำโพงคอมพิวเตอร์', category: 'audio', categoryLabel: 'เสียงและสตรีมมิง',
    price: 990, emoji: '🔊', badge: 'เสียงรอบโต๊ะ', shortDescription: 'ลำโพงสำหรับฟังเพลงและรับชมคอนเทนต์',
    description: 'ลำโพงคอมพิวเตอร์สำหรับฟังเพลง รับชมวิดีโอ หรือใช้งานที่โต๊ะทำงาน',
    specs: ['ประเภท: ลำโพงคอมพิวเตอร์', 'เหมาะสำหรับ: เพลง วิดีโอ และโต๊ะทำงาน']
  },
  {
    id: 'wireless-earbuds', name: 'หูฟังไร้สาย', category: 'audio', categoryLabel: 'เสียงและสตรีมมิง',
    price: 1490, emoji: '🎶', badge: 'ไร้สาย', shortDescription: 'หูฟังขนาดกะทัดรัดสำหรับพกพา',
    description: 'หูฟังไร้สายสำหรับฟังเพลงและใช้งานระหว่างเดินทาง',
    specs: ['ประเภท: หูฟังไร้สาย', 'เหมาะสำหรับ: ฟังเพลงและพกพา']
  },
  {
    id: 'condenser-microphone', name: 'ไมโครโฟนคอนเดนเซอร์', category: 'audio', categoryLabel: 'เสียงและสตรีมมิง',
    price: 2290, emoji: '🎙️', badge: 'บันทึกเสียง', shortDescription: 'ไมโครโฟนสำหรับพูดและสร้างคอนเทนต์',
    description: 'ไมโครโฟนคอนเดนเซอร์สำหรับบันทึกเสียง พูดคุย หรือสร้างคอนเทนต์',
    specs: ['ประเภท: Condenser microphone', 'เหมาะสำหรับ: บันทึกเสียงและสร้างคอนเทนต์']
  },
  {
    id: 'audio-interface', name: 'ออดิโออินเทอร์เฟซ', category: 'audio', categoryLabel: 'เสียงและสตรีมมิง',
    price: 3390, emoji: '🎚️', badge: 'สำหรับงานเสียง', shortDescription: 'อุปกรณ์เชื่อมต่อไมโครโฟนและเครื่องเสียงกับคอมพิวเตอร์',
    description: 'ออดิโออินเทอร์เฟซสำหรับผู้ที่ต้องการเชื่อมต่ออุปกรณ์เสียงเข้ากับคอมพิวเตอร์',
    specs: ['ประเภท: Audio interface', 'โปรดตรวจสอบพอร์ตและอุปกรณ์ที่รองรับก่อนเลือกซื้อ']
  }
].map((product) => Object.freeze({
  ...product,
  formattedPrice: new Intl.NumberFormat('th-TH').format(product.price)
}));

module.exports = {
  getAll() {
    return products;
  },
  findById(id) {
    return products.find((product) => product.id === id);
  }
};
