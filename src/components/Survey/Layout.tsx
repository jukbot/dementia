import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const SurveyLayout: FC = (): JSX.Element => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default SurveyLayout
