import React from 'react'

const SevereLevel = (): JSX.Element => {
  return (
    <div className="flex flex-col space-y-3 font-light font-pridi md:text-lg">
      <p className="text-white">โดยทั่วไป ภาวะสมองเสื่อมมักมีการดำเนินไปของโรคในระยะต่างๆ ดังนี้</p>
      <h3 className="text-lg text-[#6866e7] bg-white py-1 px-4 rounded-md w-full">ภาวะความทรงจำบกพร่อง (MCI)</h3>
      <p className="text-white">ใช้ชีวิตประจำวันได้ปกติ ดูแลตัวเองได้ แต่เริ่มหลงลืมมากขึ้น ตัดสินใจเรื่องต่างๆ ช้าลง</p>
      <h3 className="text-lg text-[#9e473c] bg-[#f5e8e9] py-1 px-4 rounded-md w-full">ภาวะสมองเสื่อมเบื้องต้น</h3>
      <p className="text-white">อาการหลงลืมเริ่มมีผลต่อการใช้ชีวิตประจำวัน เช่นหลงทางบ่อยขึ้น ทำงานที่เคยทำมาตลอดไม่ได้</p>
      <h3 className="text-lg text-white bg-[#cd786a] py-1 px-4 rounded-md w-full">ภาวะสมองเสื่อมระดับปานกลาง</h3>
      <p className="text-white">เลิกสนใจสิ่งที่เคยชอบ เริ่มทำกิจวัตรประจำวันไม่ได้ เช่นเปิดทีวี อาบน้ำแต่งตัว ต้องมีคนคอยช่วยเหลือ</p>
      <h3 className="text-lg text-white bg-[#9e473c] py-1 px-4 rounded-md w-full">ภาวะสมองเสื่อมขั้นรุนแรง</h3>
      <p className="text-white">
        ดูแลตัวเองไม่ได้เลย สื่อสารไม่ได้ ค่อยๆ ลืมการเดิน การกลืน ทำให้สำลักและติดเชื้อได้
        <br />
        *ภาวะสมองเสื่อมมักมีอาการทางจิตเวชร่วมด้วย
      </p>
    </div>
  )
}

export default SevereLevel
