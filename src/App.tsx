import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Landing from './components/Landing'
import Profile from './components/Profile'
import Share from './components/Share'

import IntroLayout from './components/Intro/Layout'
import IntroContent from './components/Intro/Content'

import OutroLayout from './components/Outro/Layout'
import OutroContent from './components/Outro/Content'

import QuizLanding from './components/Quiz/Landing'

const App = (): JSX.Element => {
  return (
    <main>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/share" element={<Share />} />
            <Route path="intro" element={<IntroLayout bgColor="bg-[#6866e7]" />}>
              <Route path=":id" element={<IntroContent />} />
            </Route>
            <Route path="/outro" element={<OutroLayout bgColor="bg-white" />}>
              <Route path=":id" element={<OutroContent />} />
            </Route>
            <Route path="/simulate" element={<OutroLayout bgColor="bg-white" />}>
              <Route path=":id" element={<OutroContent />} />
            </Route>

            <Route path="/quiz" element={<QuizLanding />}>
              {/* <Route path="landing" element={<QuizLanding />} /> */}
              {/* <Route path=":id" element={<QuizQuestion />} /> */}
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </main>
  )
}

export default App
