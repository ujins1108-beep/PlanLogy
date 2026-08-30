import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/header/header.jsx'
import Homepage from './pages/homepage/homepage.jsx'
import Activity from './pages/activity/activity.jsx'
import Inbox from './pages/inbox/inbox.jsx'
import Today from './pages/today/today.jsx'

export default function App() {
  const [searchInputValue, setSearchInputValue] = useState()
  const [searchValue, setSearchValue] = useState("")
  
  const [currentPage, setCurrentPage] = useState('inbox')

  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem('planlogy-tasks')
    return savedTask ? JSON.parse(savedTask) : []
  })

  const [activity, setActivity] = useState(() => {
    const savedActivity = localStorage.getItem('planlogy-activity')
    return savedActivity ? JSON.parse(savedActivity) : []
  })

  useEffect(() => {
    localStorage.setItem('planlogy-tasks', JSON.stringify(task))
  }, [task])

  useEffect(() => {
    localStorage.setItem('planlogy-activity', JSON.stringify(activity))
  }, [activity])

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
            <Route path='/activity' element={<Activity currentPage={currentPage} setCurrentPage={setCurrentPage} activity={activity} />} />
            <Route path='/inbox' element={<Inbox currentPage={currentPage} setCurrentPage={setCurrentPage} task={task} setTask={setTask} searchValue={searchValue} activity={activity} setActivity={setActivity} />} />
            <Route path='/today' element={<Today currentPage={currentPage} setCurrentPage={setCurrentPage} task={task} setTask={setTask} searchValue={searchValue} activity={activity} setActivity={setActivity} />} />
          </Routes>
        </div>
      
      
    </>
  )
}
