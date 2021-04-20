import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const QuizLayout: FC = (): JSX.Element => {
  return (
    <main className={`flex flex-col fixed h-full w-full`}>
      <Outlet />
    </main>
  )
}

export default QuizLayout
