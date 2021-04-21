import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const SimulateLayout: FC = (): JSX.Element => {
  return (
    <main className="fixed flex flex-col w-full h-full">
      <Outlet />
    </main>
  )
}

export default SimulateLayout
