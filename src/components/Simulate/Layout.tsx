import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const SimulateLayout: FC = (): JSX.Element => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default SimulateLayout
