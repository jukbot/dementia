import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const SurveyLayout: FC = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default SurveyLayout
