import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <>
      <div className="fixed h-full w-full bg-[#6866e7] p-6 overflow-hidden">
        <section className="flex flex-col items-center justify-center p-6 mx-auto space-y-4 bg-white rounded-md lg:max-w-1/2">
          <div>
            <h1 className="text-center text-[#666666] text-xl font-medium">ข้อมูลส่วนตัว</h1>
          </div>
          <div className="px-8 overflow-hidden">
            <div className="grid grid-cols-12 gap-x-6 gap-y-4">
              <div className="col-span-6">
                <label htmlFor="gender" className="sr-only">
                  เพศ
                </label>
                <select
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
                  className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866E7]"
                >
                  <option value="male">กรุงเทพ</option>
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
                  className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866E7]"
                >
                  <option value="" disabled>
                    รหัสไปรษณีย์
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[#666666] text-xl text-center">
              คุณมีความเกี่ยวข้องกับ
              <br />
              ภาวะสมองเสื่อมอย่างไร
            </h2>
          </div>
          <div className="flex flex-col self-center w-full px-6 space-y-2 md:max-w-1/2">
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-2 font-light font-pridi text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md hover:bg-[#4842e0] hover:text-[#e7e7f9] focus:outline-none"
            >
              สงสัยว่าตัวเองอาจมีความเสี่ยง
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-2 font-light font-pridi text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md hover:bg-[#4842e0] hover:text-[#e7e7f9] focus:outline-none"
            >
              เป็นผู้รับผิดชอบการดูแลผู้สูงอายุ
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-2 font-light font-pridi text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md hover:bg-[#4842e0] hover:text-[#e7e7f9] focus:outline-none"
            >
              มีผู้สูงอายุในครอบครัว
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-2 font-light font-pridi text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md hover:bg-[#4842e0] hover:text-[#e7e7f9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              รู้จักผู้ที่มีอาการสมองเสื่อม
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-2 font-light font-pridi text-[#6866E7] bg-[#E7E7F9] border border-transparent rounded-md hover:bg-[#4842e0] hover:text-[#e7e7f9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              อื่นๆ
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/outro/1')}
              className="inline-flex items-center px-8 py-2 text-lg font-medium border rounded-md border-[#4842e0] text-white hover:text-[#6866E7] bg-[#4842e0] hover:border-gray-50 hover:bg-gray-50 hover:text-[#e7e7f9] focus:outline-none shadow-dark hover:shadow-lg"
            >
              บันทึก
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile
