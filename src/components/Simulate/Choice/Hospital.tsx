import React, { FC, useEffect, useState } from 'react'
import { HospitalChoice } from '../../../../@types'
import { useLocalStorage } from '../../../utils/useLocalStorage'

const content: HospitalChoice[] = [
  {
    id: 1,
    title: 'โรงพยาบาลรัฐ',
    value: 'public-hospital',
    prev: null,
    next: 1,
    content:
      'โดยมากจะให้เข้าพบแพทย์ทั่วไปก่อน หากพบว่า มีความเสี่ยงจะส่งต่อไปให้แพทย์เฉพาะทาง เพื่อเข้ารับการวินิจฉัยภาวะสมองเสื่อม ข้อดีคือ หากเป็นอาการที่เกี่ยวเนื่องกับส่วนอื่นๆ ใน ร่างกาย แพทย์ก็จะสามารถส่งต่อได้ง่าย แต่เนื่องจากแพทย์เฉพาะทางในแต่ละจังหวัดมี จำกัด จึงอาจต้องใช้เวลารอผลตรวจค่อนข้าง นาน โดยขึ้นอยู่กับนโยบายของแต่ละโรงพยาบาล',
  },
  {
    id: 2,
    title: 'โรงพยาบาลเอกชน',
    value: 'private-hospital',
    prev: 0,
    next: 2,
    content:
      'มีแพ็กเกจตรวจสมองเสื่อมให้เลือกหลากหลาย บางแห่งจะตรวจคัดแยกด้วยการทำแบบประเมินเพื่อให้ทราบภาวะสมองเสื่อมเบื้องต้นโดย เจ้าหน้าที่พยาบาล บางแห่งเป็นแพ็กเกจวินิจฉัย อย่างละเอียดโดยแพทย์เฉพาะทาง เช่น สแกน สมอง ตรวจเลือด ราคาจึงขึ้นอยู่กับวิธีตรวจ วินิจฉัย มีตั้งแต่หลักพันไปจนถึงหลักหมื่นบาท',
  },
  {
    id: 3,
    title: 'คลินิกใกล้บ้าน',
    value: 'nearby-clinic',
    prev: 1,
    next: null,
    content:
      'ข้อดีคือ มีความรวดเร็วในการเข้าตรวจคัดกรอง หรือวินิจฉัยโดยแพทย์ที่มีความเชี่ยวชาญ เฉพาะด้าน แต่หากพบสาเหตุที่เกี่ยวเนื่อง กับส่วนอื่นๆ ในร่างกาย ก็อาจจำเป็นต้องส่งไป ตรวจวินิจฉัยเพิ่มเติมที่โรงพยาบาล',
  },
]

const Hospital: FC = () => {
  const [section, setSection] = useState<HospitalChoice | null>(null)
  const [hospital, setHospital] = useLocalStorage<string | null | undefined>('hospital-choice', null)

  useEffect(() => {
    if (!hospital) {
      setHospital(section?.value)
    }
  }, [section])

  return (
    <div className="relative flex justify-center pt-12">
      {!section ? (
        <ul className="flex flex-col items-center justify-center w-full space-y-4 text-center max-w-1/2">
          <li
            role="button"
            onClick={() => setSection(content[0])}
            className="bg-[#a7a5f0] text-lg font-medium shadow-dark rounded-md py-2 px-4 text-white w-full hover:bg-[#6866e7] hover:shadow-lg"
          >
            โรงพยาบาลรัฐ
          </li>
          <li
            role="button"
            onClick={() => setSection(content[1])}
            className="bg-[#a7a5f0] text-lg font-medium shadow-dark rounded-md py-2 px-4 text-white w-full hover:bg-[#6866e7] hover:shadow-lg"
          >
            โรงพยาบาลเอกชน
          </li>
          <li
            role="button"
            onClick={() => setSection(content[2])}
            className="bg-[#a7a5f0] text-lg font-medium shadow-dark rounded-md py-2 px-4 text-white w-full hover:bg-[#6866e7] hover:shadow-lg"
          >
            คลินิกใกล้บ้าน
          </li>
        </ul>
      ) : null}
      {section ? (
        <div
          role="dialog"
          aria-labelledby=""
          aria-describedby="dialog1Desc"
          className="absolute top-0 p-6 bg-[#6866e7] justify-center text-white flex flex-col space-y-4 rounded-md"
        >
          <h2 className="top-0 text-xl font-medium text-center text-white">{section?.title}</h2>
          <div className="absolute top-0 right-0 pr-4 opacity-75">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" onClick={() => setSection(null)}>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-lg font-light text-white font-pridi">{section?.content}</p>
          <div className="flex justify-center pt-4 space-x-4">
            {section?.prev !== null ? (
              <button
                onClick={() => setSection(content[section?.prev ?? 0])}
                className={`border-[#a7a5f0] text-[#a7a5f0] focus:outline-none inline-flex items-center px-6 py-2 text-lg font-medium border rounded-md`}
              >
                ย้อนกลับ
              </button>
            ) : null}

            {section?.next !== null ? (
              <button
                onClick={() => setSection(content[section?.next ?? 0])}
                className={`border-[#a7a5f0] text-[#a7a5f0] focus:outline-none inline-flex items-center px-6 py-2 text-lg font-medium border rounded-md`}
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

export default Hospital
