import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ThemeLayout from './ContextAPI/pages/ThemeLayout'
// ThemeProvider를 import해서 ThemeContext.Provider가 감싸는 형태를 만들어준다.
// import ThemeProvider from './ThemeContext'

import Home from './Context02-1/pages/Home'
import Profile2 from './Context02-1/components/Profile2'
import LoginForm2 from './Context02-1/components/LoginForm2'
import AuthProvider2 from './Context02-1/contexts/AuthContext2'
import Header2 from './Context02-1/components/Header2'

function App() {

  return (
    <>
      <AuthProvider2>
        <Header2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm2 />} />
          <Route path='/profile' element={<Profile2 />} />
        </Routes>
      </AuthProvider2>
    </>
  )
}

export default App
