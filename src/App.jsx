import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Users from './components/Users'
import User from './components/User'
import Add from './components/Add'
import Edit from './components/Edit'


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Users />} />
            <Route path=":id" element={<User />} />
            <Route path="add" exact element={<Add />} />
            <Route path="edit/:id" exact element={<Edit />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
