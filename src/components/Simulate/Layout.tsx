import React, { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  bgColor?: string
}

const NavContent: FC<Props> = ({ bgColor }): JSX.Element => {
  return (
    <>
      <main className={`${bgColor} fixed h-full w-full`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default NavContent
