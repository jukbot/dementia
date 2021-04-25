import React, { FC } from 'react'

const Statistic: FC = () => {
  return (
    <div className="flex flex-col h-full space-y-8 text-center text-white">
      <p className="text-lg font-light font-pridi">
        ในประชากรไทยทุก 100 คน
        <br /> จะมีผู้ที่ป่วยอัลไซเมอร์ ซึ่งเป็นภาวะสมองเสื่อม
        <br /> ประเภทที่พบมากที่สุด อย่างน้อย
      </p>
      <p className="text-3xl font-normal">1 คน</p>
      <p className="text-lg font-light font-pridi">
        ในปี พ.ศ. 2573 ประเทศไทยจะมีจำนวนผู้สูงอายุที่ป่วยเป็นโรคอัลไซเมอร์ ประมาณ
      </p>
      <p className="text-4xl font-normal">1 แสนคนต่อปี</p>
      <p className="text-lg font-light font-pridi">และจะมีจำนวนผู้ป่วยอัลไซเมอร์สะสมกว่า</p>
      <p className="text-6xl font-normal">1 ล้านคน</p>
    </div>
  )
}

export default Statistic
