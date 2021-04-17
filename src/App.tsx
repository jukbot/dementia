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

import QuizLayout from './components/Quiz/Layout'
import QuizLanding from './components/Quiz/Landing'
import QuizContent from './components/Quiz/Content'
import QuizResult from './components/Quiz/Result'

import SimulateLayout from './components/Simulate/Layout'
import SimulateLanding from './components/Simulate/Landing'
import SimulateContent from './components/Simulate/Content'

import SurveyLayout from './components/Survey/Layout'
import SurveyContent from './components/Survey/Content'
import SurveyResult from './components/Survey/Result'

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
            <Route path="/quiz" element={<QuizLayout />}>
              <Route path="landing" element={<QuizLanding bgColor="bg-[#4842e0]" />} />
              <Route path=":id" element={<QuizContent bgColor="bg-white" />} />
              <Route path="result" element={<QuizResult bgColor="bg-[#4842e0]" />} />
            </Route>
            <Route path="/simulate" element={<SimulateLayout />}>
              <Route path="landing" element={<SimulateLanding bgColor="bg-[#6866e7]" />} />
              <Route path=":id" element={<SimulateContent />} />
            </Route>
            <Route path="/survey" element={<SurveyLayout />}>
              <Route path=":id" element={<SurveyContent bgColor="bg-[#e7e7f9]" />} />
              <Route path="result" element={<SurveyResult bgColor="bg-[#4842e0]" />} />
            </Route>
            <Route path="/outro" element={<OutroLayout bgColor="bg-white" />}>
              <Route path=":id" element={<OutroContent />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </main>
  )
}

export default App
