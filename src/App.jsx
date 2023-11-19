import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import Error from './components/Error'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movie/:id' element={<SingleMovie />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App
