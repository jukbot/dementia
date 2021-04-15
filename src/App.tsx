import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Layout from './components/Layout/Layout'
import OutroLayout from './components/Outro/Layout'
import OutroContent from './components/Outro/Content'
import Profile from './components/Profile'
import Share from './components/Share'
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
            <Route path="/outro" element={<OutroLayout bgColor="bg-white" />}>
              <Route path=":id" element={<OutroContent />} />
            </Route>
            {/* <Route path="/introduction" element={<Users />}>
            <Route path="me" element={<OwnUserProfile />} />
            <Route path=":id" element={<UserProfile />} />
          </Route> */}
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
