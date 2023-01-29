import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Photos } from './pages'

function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo" element={<Photos />} />

    </Routes>
  )
}

export default MainRouter