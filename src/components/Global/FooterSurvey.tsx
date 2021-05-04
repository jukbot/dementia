import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateData } from '../../utils/sheety'
interface Props {
  className?: string
  saveColumn: string
  next: string | null
  disable?: boolean
}

const FooterSurvey: FC<Props> = ({ saveColumn, next, className, disable }): JSX.Element => {
  const navigate = useNavigate()
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [isSaving, setIsSaving] = useState<boolean>(false)

  useEffect(() => {
    setIsDisabled(Boolean(disable))
  }, [disable])

  useEffect(() => {
    function checkUserData() {
      const answer = window.localStorage.getItem(saveColumn)
      if (answer) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }

    checkUserData()
    window.addEventListener('storage', checkUserData)

    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, [])

  const saveForm = async (): Promise<void> => {
    const id = window.localStorage.getItem('dementia-uid')
    const answer = window.localStorage.getItem(saveColumn)
    try {
      if (id && answer) {
        setIsSaving(true)
        setIsDisabled(true)
        const result = await updateData({ [saveColumn]: answer.replaceAll('"', '') }, 'survey', id ?? '1')
        if (result) {
          setIsSaving(false)
          setIsDisabled(false)
        }
      }
      navigate(next ?? '/')
    } catch (error) {
      console.log(error)
      setIsSaving(false)
      setIsDisabled(false)
    }
  }

  return (
    <nav className={`flex justify-center w-full bottom-0 pb-4 space-x-4 h-20 flex-shrink-0 mt-auto ${className}`}>
      {next ? (
        <button
          type="button"
          disabled={isDisabled}
          onClick={saveForm}
          className={`${
            isDisabled ? 'text-[#a7a5f0] border-[#a7a5f0]' : 'text-white bg-[#6866E7] border-[#6866E7] shadow-dark'
          } inline-flex items-center px-6 py-2 text-lg font-medium border rounded-md focus:outline-none`}
        >
          {isSaving ? <span className="animate-pulse">กำลังบันทึก</span> : 'บันทึก'}
        </button>
      ) : (
        ''
      )}
    </nav>
  )
}

export default FooterSurvey
