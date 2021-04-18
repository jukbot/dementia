import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { provinces } from '../data/province'
import { zipcode } from '../data/zipcode'

const Profile = (): JSX.Element => {
  const navigate = useNavigate()
  const [province, setProvince] = useState<string | null>('1')

  return (
    <section className="fixed h-full w-full bg-[#6866e7] p-6 flex justify-center lg:items-center">
      <div className="flex flex-col items-center justify-between w-full p-6 space-y-4 bg-white rounded-md lg:max-w-1/2">
        <div>
          <h1 className="text-center text-[#666666] text-xl font-medium">ข้อมูลส่วนตัว</h1>
        </div>
        <div className="px-8">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4">
            <div className="col-span-6">
              <label htmlFor="gender" className="sr-only">
                เพศ
              </label>
              <select
                required
                id="gender"
                name="gender"
                placeholder="เพศ"
                className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866E7]"
              >
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div className="col-span-6">
              <label htmlFor="age" className="sr-only">
                อายุ
              </label>
              <input
                required
                type="text"
                name="age"
                id="age"
                placeholder="อายุ"
                min="18"
                inputMode="numeric"
                className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866E7]"
              />
            </div>
            <div className="col-span-12">
              <label htmlFor="province" className="sr-only">
                จังหวัด
              </label>
              <select
                id="province"
                name="province"
                placeholder="จังหวัด"
                onChange={(e) => setProvince(e.target?.value)}
                defaultValue=""
                className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866E7]"
              >
                {provinces.map((p) => {
                  return (
                    <option key={p.PROVINCE_ID} value={p.PROVINCE_ID}>
                      {p.PROVINCE_NAME}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="col-span-12">
              <label htmlFor="postal_code" className="sr-only">
                รหัสไปรษณีย์
              </label>
              <select
                name="postal_code"
                id="postal_code"
                placeholder="รหัสไปรษณีย์"
                disabled={!province}
                className={`${
                  province ? 'placeholder-[#808080]' : 'placeholder-[#808080]'
                } block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi focus:outline-none focus:ring-0 focus:border-[#6866E7]`}
              >
                {[...new Set(zipcode.filter((z) => z.PROVINCE_ID === province).map((item) => item.ZIPCODE))].map(
                  (code) => {
                    return (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    )
                  }
                )}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#666666] text-xl text-center font-medium">
            คุณมีความเกี่ยวข้องกับ
            <br />
            ภาวะสมองเสื่อมอย่างไร
          </h2>
        </div>
        <div className="flex flex-col self-center w-full px-6 space-y-2">
          {/* hover:bg-[#4842e0] hover:text-[#e7e7f9]  */}
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 font-light font-pridi text-lg text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md focus:outline-none"
          >
            สงสัยว่าตัวเองอาจมีความเสี่ยง
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 font-light font-pridi text-lg text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md focus:outline-none"
          >
            เป็นผู้รับผิดชอบการดูแลผู้สูงอายุ
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 font-light font-pridi text-lg text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md focus:outline-none"
          >
            มีผู้สูงอายุในครอบครัว
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 font-light font-pridi text-lg text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md focus:outline-none"
          >
            รู้จักผู้ที่มีอาการสมองเสื่อม
          </button>
          <label htmlFor="other" className="sr-only">
            <span className="text-gray-700">Input (text)</span>
          </label>
          <input
            id="other"
            type="text"
            autoComplete="off"
            className="inline-flex text-center justify-center items-center placeholder-[#6866E7] [#6866E7] text-lg font-light font-pridi bg-[#E7E7F9] border border-transparent rounded-md focus:outline-none"
            placeholder="อื่นๆ"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => navigate('/intro/1')}
            className="inline-flex items-center px-8 py-2 text-lg font-medium border rounded-md border-[#4842e0] text-white hover:text-[#6866E7] bg-[#4842e0] hover:border-gray-50 hover:bg-gray-50 hover:text-[#e7e7f9] focus:outline-none shadow-dark hover:shadow-lg"
          >
            บันทึก
          </button>
        </div>
      </div>
    </section>
  )
}

export default Profile
