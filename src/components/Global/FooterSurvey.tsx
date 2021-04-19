import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  className?: string
  saveColumn: string
  lightTheme: boolean
  next: string | null
}
const FooterNav: FC<Props> = ({ lightTheme = true, saveColumn, next, className }): JSX.Element => {
  const navigate = useNavigate()
  const saveToSheet = () => {
    console.log(saveColumn)
    navigate(next ?? '/')
  }

  return (
    <nav className={`bottom-0 flex justify-center w-full mb-8 space-x-4 mt-auto ${className}`}>
      {next ? (
        <button
          type="button"
          onClick={() => saveToSheet()}
          className={`${
            lightTheme
              ? 'text-[#6866E7] bg-white border-white hover:bg-transparent hover:text-white'
              : 'text-white bg-[#6866E7] border-[#6866E7] hover:bg-[#A7A5F0] hover:border-[#A7A5F0]'
          } inline-flex items-center px-6 py-2 text-lg font-medium border shadow-dark rounded-md focus:outline-none`}
        >
          บันทึก
        </button>
      ) : (
        ''
      )}
    </nav>
  )
}

export default FooterNav
