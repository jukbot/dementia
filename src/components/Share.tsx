import React, { useEffect } from 'react'
import { Facebook, Line, Twitter } from './Icons'

const Share = (): JSX.Element => {
  const webUrl = 'https://dementia.pages.dev'
  const goToLink = (url: string): void => {
    // window.location.assign(url)
    window.open(url, '_blank')
  }

  useEffect(() => {
    window.localStorage.removeItem('quiz-score')
    window.localStorage.removeItem('hospital-choice')
  }, [])

  return (
    <section className="fixed h-full w-full bg-[#4842e0]">
      <div className="flex flex-col justify-between h-full py-12">
        <h1 className="text-2xl font-medium text-center text-[#a7a5f0]">
          ลิงก์ข้อมูล
          <br /> ที่เป็นประโยชน์เกี่ยวกับ
          <br /> ภาวะสมองเสื่อม
        </h1>

        <div className="flex flex-col self-center w-full px-8 pt-4 space-y-4 md:max-w-1/2">
          <button
            type="button"
            onClick={() => goToLink('https://www.the101.world/prevent-dementia-syndrome')}
            className="inline-flex justify-center items-center px-6 py-2 text-lg font-medium text-primary bg-[#a7a5f0] border border-transparent rounded-md shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            ‘ยากันลืม’ คู่มือเตือนความจำ
          </button>
          <button
            type="button"
            onClick={() => goToLink('https://www.facebook.com/azthai2013')}
            className="inline-flex justify-center items-center px-6 py-2 text-lg font-medium text-primary bg-[#a7a5f0] border border-transparent rounded-md shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            สายด่วนดูแล ผู้ป่วยสมองเสื่อม
          </button>
          <button
            type="button"
            onClick={() => window.open('/public/pdf/self-survey.pdf', '_blank')}
            className="inline-flex justify-center items-center px-6 py-2 text-lg font-medium text-primary bg-[#a7a5f0] border border-transparent rounded-md shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            ดาวน์โหลดแบบคัดกรอง
          </button>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl font-medium text-center text-[#e7e7f9]">แชร์สิ่งนี้ให้คนที่คุณรัก</h2>
          <div className="flex justify-center pt-6 space-x-4 text-[#a7a5f0]">
            <a href={`https://social-plugins.line.me/lineit/share?url=${webUrl}`} target="_blank" rel="noreferrer">
              <Line className="flex-shrink-0 w-12 h-12 cursor-pointer md:w-20 md:h-20 hover:text-white" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${webUrl}&t=ห้องสมองเสื่อม`}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="flex-shrink-0 w-12 h-12 cursor-pointer md:w-20 md:h-20 hover:text-white" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${webUrl}&hashtag=#ห้องสมองเสื่อม&text=มาทำแบบสำรวจว่าคุณมีความเสี่ยงความจำเสื่อมแค่ไหน`}
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="flex-shrink-0 w-12 h-12 cursor-pointer md:w-20 md:h-20 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Share
