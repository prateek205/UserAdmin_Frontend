import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import User from './userMngmt/User'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='user' element={<User/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App