import './sidebar.css'
import { useNavigate } from 'react-router-dom'
import today from '../../assets/today.png'
import inbox from '../../assets/inbox.png'
import activity from '../../assets/activity.png'

export default function Sidebar({ currentPage, task, setTask }) {
    const navigate = useNavigate()

    function addTask() {
        if (currentPage === '/inbox') {
            const newTask = [...task, ["새 일정", false, '/inbox', crypto.randomUUID()]]
            setTask(newTask)
            console.log(newTask)
        }

        if (currentPage === '/today') {
            const newTask = [...task, ["새 일정", false, '/today', crypto.randomUUID()]]
            setTask(newTask)
            console.log(newTask)
        }
    }

    return (
        <>
            <div className='sidebar-box'>
                <div className='new-task' onClick={() => {addTask()}}>
                    <h1 style={{margin: 0}} >+ 추가하기</h1>
                </div>

                <div className='today' onClick={() => {navigate('/today')}}>
                    <img src={today} />
                    <h1>오늘</h1>
                </div>

                <div className='inbox' onClick={() => {navigate('/inbox')}}>
                    <img src={inbox} />
                    <h1>보관함</h1>
                </div>

                <div className='activity' onClick={() => {navigate('/activity')}}>
                    <img src={activity} />
                    <h1>활동</h1>
                </div>
            </div>
        </>
    )
}