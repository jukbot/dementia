import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { provinces } from '../data/province'
import { districts } from '../data/district'
import { zipcode } from '../data/zipcode'
import { useLocalStorage } from '../utils/useLocalStorage'
import { RadioGroup } from '@headlessui/react'
import { FormData } from '../../@types'
import { addData, updateData } from '../utils/sheety'

const defaultValue: FormData = {
  gender: 'male',
  age: '',
  province: '1',
  postal: '10200',
  relevance: '',
  other: '',
}

interface FormValue {
  name: string
  value: string | null
}

const Profile = (): JSX.Element => {
  const navigate = useNavigate()
  const otherInput = useRef<HTMLInputElement>(null)
  const [profile, setProfile] = useLocalStorage<FormData | null>('profile', null)
  const [, setSubject] = useLocalStorage<string | null>('subject', null)
  const [relevance, setRelevance] = useState<string | null>(null)
  const [age, setAge] = useState<number>(0)
  const [provinceName, setProvinceName] = useState<string | null>('กระบี่')
  const [districtName, setDistrictName] = useState<string | null>('10100')
  const [zoneArea, setZoneArea] = useState<string | null>('เมือง')
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [ageError, setAgeError] = useState<boolean>(false)
  const [isDisabled, setDisabled] = useState<boolean>(true)
  const [state, setState] = useState<FormData>(() => {
    const stickyValue = window.localStorage.getItem('profile')
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  useEffect(() => {
    setProfile(state)
    validateForm(state)
  }, [state])

  useEffect(() => {
    if (relevance) {
      checkSubjectName(relevance)
    }
  }, [age, relevance])

  const saveForm = async (): Promise<void> => {
    try {
      const id = window.localStorage.getItem('dementia-uid')
      if (!id) {
        setIsSaving(true)
        setDisabled(true)
        const created = String(new Date().toLocaleDateString())
        const result = await addData({ ...profile, created, provinceName, districtName, zoneArea }, 'survey')
        if (result?.survey) {
          window.localStorage.setItem('dementia-uid', String(result?.survey.id))
        }
      } else {
        setIsSaving(true)
        setDisabled(true)
        await updateData({ ...profile, provinceName, districtName, zoneArea }, 'survey', id ?? '1')
      }
      setIsSaving(false)
      setDisabled(false)
      navigate('/intro/1')
    } catch (error) {
      console.log(error)
      setIsSaving(false)
      setDisabled(false)
    }
  }

  const validateForm = (data: FormData) => {
    if (data.relevance !== 'e') {
      const removeKey = (key: string, { [key]: _, ...rest }) => rest
      const noOther = removeKey('other', data)
      setDisabled(!Object.keys(noOther).every((k) => noOther[k]))
    } else {
      setDisabled(!Object.keys(data).every((k) => data[k]))
    }
  }

  const validateAge = (e: HTMLInputElement): void => {
    const inputAge = parseInt(e.value)
    if (inputAge >= 15 && inputAge <= 99) {
      handleChange(e)
      setAgeError(false)
      setAge(parseInt(e.value))
    } else {
      handleChange({ name: 'age', value: '' })
      setAgeError(true)
    }
  }

  const getProvinceName = (id: number) => {
    const province = provinces.find((v) => v.PROVINCE_ID === id)
    console.log(province?.PROVINCE_NAME)
    setProvinceName(String(province?.PROVINCE_NAME))
  }

  const getDistrictName = (id: string) => {
    const result = zipcode.find((v) => v.ZIPCODE === id)
    const district = districts.find((v) => v.DISTRICT_ID === Number(result?.DISTRICT_ID))
    console.log(district?.DISTRICT_NAME)

    if (
      district?.DISTRICT_NAME.startsWith('เขต') ||
      district?.DISTRICT_NAME.startsWith('เมือง') ||
      district?.DISTRICT_NAME.startsWith('พระนครศรีอยุธยา')
    ) {
      setZoneArea('เมือง')
    } else {
      setZoneArea('ชนบท')
    }

    setDistrictName(String(district?.DISTRICT_NAME))
  }

  const handleChange = (e: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement) | FormValue): void => {
    setState({ ...state, [e.name]: e.value })
    validateForm({ ...state, [e.name]: e.value })

    if (e.name === 'relevance') {
      setRelevance(e.value)
    }

    if (e.name === 'province') {
      getProvinceName(Number(e.value))
    }

    if (e.name === 'postal') {
      getDistrictName(String(e.value))
    }
  }

  const checkSubjectName = (value: string): void => {
    switch (value) {
      case 'a':
        setSubject('ตัวเอง')
        return
      case 'b':
        setSubject('ผู้สูงอายุในครอบครัว')
        return
      default:
        if (age < 50) {
          setSubject('ผู้สูงอายุในครอบครัว')
        } else {
          setSubject('ตัวเอง')
        }
    }
  }

  return (
    <section className="fixed h-full w-full bg-[#6866e7] p-6 flex justify-center lg:items-center">
      <div className="static flex flex-col items-center justify-between w-full p-6 space-y-2 overflow-y-auto bg-white rounded-md sm:space-y-4 sm:max-w-[500px]">
        <div>
          <h1 className="text-center text-[#666666] text-xl font-medium">ข้อมูลส่วนตัว</h1>
        </div>
        <div className="w-full">
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
                defaultValue={profile?.gender ?? ''}
                onChange={(e) => handleChange(e.target)}
                className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866e7]"
              >
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div className="relative col-span-6">
              <label htmlFor="age" className="sr-only">
                อายุ
              </label>
              <input
                required
                type="number"
                name="age"
                id="age"
                placeholder="อายุ"
                defaultValue={profile?.age ?? ''}
                onChange={(e) => validateAge(e.target)}
                min="18"
                step="1"
                max="99"
                inputMode="numeric"
                className={`${
                  ageError ? 'focus:border-[#ab2a00] border-[#ab2a00]' : 'focus:border-[#6866e7] border-[#808080]'
                } appearance-none block w-full text-base font-light h-12 border-0 border-b py-2 px-3 bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0`}
              />
              <div
                className={`${
                  ageError ? 'block' : 'hidden'
                } absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none`}
              >
                <ExclamationCircleIcon className="w-5 h-5 text-[#ab2a00]" aria-hidden="true" />
              </div>
              <div
                className={`${
                  ageError ? 'block' : 'hidden'
                } w-full absolute -bottom-4 flex justify-center pb-0 pointer-events-none text-[#ab2a00] text-xs font-light font-pridi`}
              >
                ตัวเลข 15-99
              </div>
            </div>
            <div className="col-span-12">
              <label htmlFor="province" className="sr-only">
                จังหวัด
              </label>
              <select
                id="province"
                name="province"
                placeholder="จังหวัด"
                defaultValue={profile?.province ?? ''}
                onChange={(e) => handleChange(e.target)}
                className="block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi placeholder-[#808080] focus:outline-none focus:ring-0 focus:border-[#6866e7]"
              >
                {provinces
                  .sort((a, b) => a.PROVINCE_NAME.localeCompare(b.PROVINCE_NAME))
                  .map((p) => {
                    return (
                      <option key={p.PROVINCE_ID} value={p.PROVINCE_ID}>
                        {p.PROVINCE_NAME}
                      </option>
                    )
                  })}
              </select>
            </div>
            <div className="col-span-12">
              <label htmlFor="postal" className="sr-only">
                รหัสไปรษณีย์
              </label>
              <select
                name="postal"
                id="postal"
                placeholder="รหัสไปรษณีย์"
                onChange={(e) => handleChange(e.target)}
                defaultValue={profile?.postal ?? ''}
                disabled={!state.province}
                className={`${
                  state.province ? 'placeholder-[#808080]' : 'placeholder-[#808080]'
                } block w-full text-base font-light h-12 border-0 border-b py-2 px-3 border-[#808080] bg-[#E5E5E5] rounded-t-md font-pridi focus:outline-none focus:ring-0 focus:border-[#6866e7]`}
              >
                {[
                  ...new Set(
                    zipcode
                      .filter((z) => z.PROVINCE_ID === state.province)
                      .map((item) => item.ZIPCODE)
                      .sort((a, b) => {
                        return Number(a) - Number(b)
                      })
                  ),
                ].map((code) => {
                  return (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#666666] text-lg lg:text-xl text-center font-medium">
            คุณมีความเกี่ยวข้องกับ
            <br />
            ภาวะสมองเสื่อมอย่างไร
          </h2>
        </div>
        <div className="w-full">
          <RadioGroup
            value={state.relevance}
            onChange={(value) => handleChange({ value, name: 'relevance' })}
            className="flex flex-col w-full space-y-2"
          >
            <RadioGroup.Label className="sr-only">เลือกความเกี่ยวข้องภาวะสมองเสื่อม</RadioGroup.Label>
            <RadioGroup.Option value="a">
              {({ checked }: { checked: boolean }) => (
                <button
                  type="button"
                  className={`${
                    checked ? 'bg-[#4842e0] text-[#e7e7f9]' : 'text-[#6866e7] bg-[#e7e7f9]'
                  } inline-flex justify-center items-center w-full px-2 py-2 font-light font-pridi text-lg border border-transparent rounded-md focus:outline-none`}
                >
                  สงสัยว่าตัวเองอาจมีความเสี่ยง
                </button>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="b">
              {({ checked }: { checked: boolean }) => (
                <button
                  type="button"
                  className={`${
                    checked ? 'bg-[#4842e0] text-[#e7e7f9]' : 'text-[#6866e7] bg-[#e7e7f9]'
                  } inline-flex justify-center items-center w-full px-2 py-2 font-light font-pridi text-lg border border-transparent rounded-md focus:outline-none`}
                >
                  เป็นผู้รับผิดชอบการดูแลผู้สูงอายุ
                </button>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="c">
              {({ checked }: { checked: boolean }) => (
                <button
                  type="button"
                  className={`${
                    checked ? 'bg-[#4842e0] text-[#e7e7f9]' : 'text-[#6866e7] bg-[#e7e7f9]'
                  } inline-flex justify-center items-center w-full px-2 py-2 font-light font-pridi text-lg border border-transparent rounded-md focus:outline-none`}
                >
                  มีผู้สูงอายุในครอบครัว
                </button>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="d">
              {({ checked }: { checked: boolean }) => (
                <button
                  type="button"
                  className={`${
                    checked ? 'bg-[#4842e0] text-[#e7e7f9]' : 'text-[#6866e7] bg-[#e7e7f9]'
                  } inline-flex justify-center items-center w-full px-2 py-2 font-light font-pridi text-lg border border-transparent rounded-md focus:outline-none`}
                >
                  รู้จักผู้ที่มีอาการสมองเสื่อม
                </button>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="e" onClick={() => otherInput?.current?.focus()}>
              {({ checked }: { checked: boolean }) => (
                <>
                  <label htmlFor="other" className="sr-only">
                    <span className="text-gray-700">อื่นๆ</span>
                  </label>
                  <input
                    id="other"
                    name="other"
                    ref={otherInput}
                    type="text"
                    autoComplete="off"
                    defaultValue={profile?.other ?? ''}
                    onChange={(e) => handleChange(e.target)}
                    className={`${
                      checked
                        ? 'bg-[#4842e0] text-[#e7e7f9] placeholder-[#e7e7f9]'
                        : 'text-[#6866e7] bg-[#e7e7f9] placeholder-[#6866e7]'
                    } inline-flex text-center justify-center items-center w-full text-lg font-light font-pridi border border-transparent rounded-md focus:outline-none`}
                    placeholder={`${checked ? 'โปรดระบุ..' : 'อื่นๆ'}`}
                  />
                </>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        <div className="inline-flex justify-center pt-2">
          <button
            type="button"
            onClick={saveForm}
            disabled={isDisabled}
            className={`${
              isDisabled
                ? 'border-[#e7e7f9] text-[#e7e7f9] pointer-events-none'
                : 'border-[#4842e0] text-white bg-[#4842e0] focus:outline-none hover:shadow-md shadow-dark'
            } inline-flex items-center px-8 py-2 text-lg font-medium border rounded-md`}
          >
            {isSaving ? <span className="animate-pulse">กำลังบันทึก</span> : 'บันทึก'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Profile
