import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/header/header.jsx'
import Homepage from './pages/homepage/homepage.jsx'
import Stats from './pages/stats/stats.jsx'
import Inbox from './pages/inbox/inbox.jsx'
import Today from './pages/today/today.jsx'

export default function App() {
  const [searchInputValue, setSearchInputValue] = useState()
  const [searchValue, setSearchValue] = useState("")
  
  const [currentPage, setCurrentPage] = useState('inbox')

  const [task, setTask] = useState([])

  return (
    <>
      <Header
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        currentPage={currentPage} 
      />

      <div className='pages'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/stats' element={<Stats currentPage={currentPage} setCurrentPage={setCurrentPage} task={task} setTask={setTask} />} />
            <Route path='/inbox' element={<Inbox currentPage={currentPage} setCurrentPage={setCurrentPage} task={task} setTask={setTask} searchValue={searchValue} />} />
            <Route path='/today' element={<Today currentPage={currentPage} setCurrentPage={setCurrentPage} task={task} setTask={setTask} searchValue={searchValue} />} />
          </Routes>
        </div>
      
      
    </>
  )
}
