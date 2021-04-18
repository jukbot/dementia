import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  bgColor?: string
}

const IntroLayout: FC<Props> = ({ bgColor }): JSX.Element => {
  return (
    <main className={`${bgColor} flex flex-col fixed h-full w-full`}>
      <Outlet />
    </main>
  )
}

export default IntroLayout
