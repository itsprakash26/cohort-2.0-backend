import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import LoginPage from './features/auth/page/LoginPage'
import RegisterPage from './features/auth/page/RegisterPage'
import './style.scss'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
