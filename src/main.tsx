import React from 'react'
import { hydrate, render } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'

import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
const appComponent: JSX.Element = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)

rootElement?.hasChildNodes() ? hydrate(appComponent, rootElement) : render(appComponent, rootElement as HTMLElement)
