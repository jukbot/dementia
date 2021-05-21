import React from 'react'
import { Diagram } from '../../Icons'

const Probability = (): JSX.Element => {
  return (
    <div className="flex flex-col h-full space-y-4 sm:space-y-8">
      <p className="text-lg font-light leading-relaxed text-white font-pridi">
        ภาวะสมองเสื่อมพบได้ทุกช่วงอายุ แต่มักจะพบได้มากกว่าในผู้สูงอายุ โดยเฉพาะผู้สูงอายุที่มีอายุ 65 ปีขึ้นไป และจะมีโอกาสพบสูงขึ้นเรื่อยๆ เมื่อมีอายุมากขึ้น
      </p>
      <Diagram className="w-full py-4 mx-auto sm:max-w-[500px]" />
    </div>
  )
}

export default Probability
