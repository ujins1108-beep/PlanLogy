import './stats.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.jsx'

export default function Stats({ setCurrentPage, task, setTask }) {
    var location = useLocation()

    useEffect(() => {
        
        setCurrentPage(location.pathname)
    }, [setCurrentPage, location.pathname])

    return (
        <>
            <div className='stats-mainpage'>
                <Sidebar />
                <div className='stats-right'>
                    <h1>dd</h1>
                </div>
            </div>
        </>
    )
}