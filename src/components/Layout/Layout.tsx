import React, { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div
      className={`min-h-full overflow-hidden debug-screen ${
        process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
      } `}
    >
      <main>{children}</main>
    </div>
  )
}

export default Layout
