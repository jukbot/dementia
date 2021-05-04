import React, { FC, memo, useEffect, useState } from 'react'
import { HospitalChoice } from '../../../../@types'
import { updateData } from '../../../utils/sheety'
import { useLocalStorage } from '../../../utils/useLocalStorage'

const content: HospitalChoice[] = [
  {
    id: 1,
    title: 'โรงพยาบาลรัฐ',
    value: 'public',
    prev: null,
    next: 1,
    content:
      'โดยมากจะให้เข้าพบแพทย์ทั่วไปก่อน หากพบว่ามีความเสี่ยงจะส่งต่อไปให้แพทย์เฉพาะทาง เพื่อเข้ารับการวินิจฉัยภาวะสมองเสื่อม ข้อดีคือ หากเป็นอาการที่เกี่ยวเนื่องกับส่วนอื่นๆ ในร่างกาย แพทย์ก็จะสามารถส่งต่อได้ง่าย แต่เนื่องจากแพทย์เฉพาะทางในแต่ละจังหวัดมีจำกัด จึงอาจต้องใช้เวลารอผลตรวจค่อนข้างนาน โดยขึ้นอยู่กับนโยบายของแต่ละโรงพยาบาล',
  },
  {
    id: 2,
    title: 'โรงพยาบาลเอกชน',
    value: 'private',
    prev: 0,
    next: 2,
    content:
      'มีแพ็กเกจตรวจสมองเสื่อมให้เลือกหลากหลาย บางแห่งจะตรวจคัดแยกด้วยการทำแบบประเมินเพื่อให้ทราบภาวะสมองเสื่อมเบื้องต้นโดยเจ้าหน้าที่พยาบาล บางแห่งเป็นแพ็กเกจวินิจฉัยอย่างละเอียดโดยแพทย์เฉพาะทาง เช่น สแกนสมอง ตรวจเลือด ราคาจึงขึ้นอยู่กับวิธีตรวจวินิจฉัย มีตั้งแต่หลักพันไปจนถึงหลักหมื่นบาท',
  },
  {
    id: 3,
    title: 'คลินิกใกล้บ้าน',
    value: 'clinic',
    prev: 1,
    next: null,
    content:
      'ข้อดีคือ มีความรวดเร็วในการเข้าตรวจคัดกรอง หรือวินิจฉัยโดยแพทย์ที่มีความเชี่ยวชาญเฉพาะด้าน แต่หากพบสาเหตุที่เกี่ยวเนื่องกับส่วนอื่นๆ ในร่างกาย ก็อาจจำเป็นต้องส่งไปตรวจวินิจฉัยเพิ่มเติมที่โรงพยาบาล',
  },
]

interface Props {
  className?: string
}

const Hospital: FC<Props> = () => {
  const [section, setSection] = useState<HospitalChoice | null>()
  const [hospital, setHospital] = useLocalStorage<string | null>('hospital-choice', '')

  useEffect(() => {
    if (!hospital) {
      setHospital(section?.value ?? '')
    }
    if (!hospital && section) {
      saveForm(section?.value)
    }
  }, [section])

  const saveForm = async (value: string): Promise<void> => {
    try {
      const id = window.localStorage.getItem('dementia-uid')
      if (id) {
        await updateData({ hospital: value }, 'survey', id ?? '1')
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <div className={`relative flex justify-center pt-12`}>
      {!section ? (
        <ul className="flex flex-col items-center justify-center w-3/4 space-y-4 text-center">
          <li
            role="button"
            onClick={() => setSection(content[0])}
            className="bg-[#a7a5f0] text-lg font-medium shadow-dark rounded-md py-2 px-4 text-white w-full hover:bg-[#6866e7] hover:shadow-lg focus::bg-[#6866e7]"
          >
            โรงพยาบาลรัฐ
          </li>
          <li
            role="button"
            onClick={() => setSection(content[1])}
            className="bg-[#a7a5f0] text-lg font-medium shadow-dark rounded-md py-2 px-4 text-white w-full hover:bg-[#6866e7] hover:shadow-lg focus::bg-[#6866e7]"
          >
            โรงพยาบาลเอกชน
          </li>
          <li
            role="button"
            onClick={() => setSection(content[2])}
            className="bg-[#a7a5f0] text-lg font-medium shadow-dark rounded-md py-2 px-4 text-white w-full hover:bg-[#6866e7] hover:shadow-lg focus::bg-[#6866e7]"
          >
            คลินิกใกล้บ้าน
          </li>
        </ul>
      ) : null}
      {section ? (
        <div
          role="dialog"
          className="absolute top-0 p-6 bg-[#6866e7] text-white w-full flex flex-col space-y-4 rounded-md"
        >
          <h2 className="top-0 text-xl font-medium text-center text-white">{section?.title}</h2>

          <div className="absolute top-0 right-0 pr-4 opacity-75">
            <div
              className="flex justify-center items-center text-[#6866e7] bg-[#c9c8f3] rounded-full p-1 cursor-pointer"
              onClick={() => setSection(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <p className="h-full text-base font-light text-white sm:text-lg font-pridi">{section?.content}</p>
          <div className="flex justify-center pt-2 space-x-4 lg:pt-4">
            {section?.prev !== null ? (
              <button
                onClick={() => setSection(content[section?.prev ?? 0])}
                className={`border-[#a7a5f0] text-[#a7a5f0] focus:outline-none inline-flex h-12 flex-shrink-0 items-center px-4 py-2 text-lg font-medium border rounded-md`}
              >
                ย้อนกลับ
              </button>
            ) : null}

            {section?.next !== null ? (
              <button
                onClick={() => setSection(content[section?.next ?? 0])}
                className={`border-[#a7a5f0] text-[#a7a5f0] focus:outline-none inline-flex h-12 flex-shrink-0 items-center px-4 py-2 text-lg font-medium border rounded-md`}
              >
                หน้าถัดไป
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default memo(Hospital)
