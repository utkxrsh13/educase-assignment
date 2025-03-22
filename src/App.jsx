import React, { useState } from 'react'
import Home from './pages/Home'
import { Route, Router,Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HeroPage from './pages/HeroPage'
import { UserProvider } from './context/userContext'

const App = () => {

  const [userData, setUserData] = useState(null)

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/hero" element={<HeroPage />} />
      </Routes>
    </UserProvider>
  )
}

export default App