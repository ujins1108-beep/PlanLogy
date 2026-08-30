import './activity.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.jsx'

export default function Activity({ setCurrentPage, activity }) {
    var location = useLocation()

    useEffect(() => {
        
        setCurrentPage(location.pathname)
    }, [setCurrentPage, location.pathname])

    return (
        <>
            <div className='activity-mainpage'>
                <Sidebar />
                <div className='activity-right'>
                    <div className='activity-right-content'>
                        <h1>활동</h1>
                        <hr />
                        <div className='activity-list'>
                            {activity.map((item) => {
                                return (
                                    <>
                                        <div className='activity-item'>{item}</div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}