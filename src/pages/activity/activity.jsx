import './activity.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.jsx'

export default function Activity({ setCurrentPage, activity }) {
    var location = useLocation()

    useEffect(() => {
        
        setCurrentPage(location.pathname)
    }, [setCurrentPage, location.pathname])

    let now = new Date()
    let year = now.getFullYear()
    let month = String(now.getMonth() + 1).padStart(2,0)
    let date = String(now.getDate()).padStart(2, 0)
    let hours = now.getHours()
    let minutes = now.getMinutes()

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
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '1vw'}}>
                                        <span style={{display: 'flex', alignItems: 'center', color: 'rgb(100, 100, 100)'}}>({year}-{month}-{date}-{hours}-{minutes})</span><div className='activity-item'>{item}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}