import './inbox.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import Emptytasks from '../../components/emptytasks/emptytasks.jsx'

export default function Inbox({ currentPage, setCurrentPage, task, setTask, searchValue, activity, setActivity }) {
    const location = useLocation()

    useEffect(() => {
        
        setCurrentPage(location.pathname)
    }, [setCurrentPage, location.pathname])

    function taskUpdate(id, value) {
        const newTask = [...task]
        const targetTask = newTask.find(item => item[3] === id)
        targetTask[0] = value
        setTask(newTask)
        console.log(newTask)
    }

    function checkboxUpdate(id) {
        const newTask = [...task]
        const targetTask = newTask.find(item => item[3] === id)
        targetTask[1] = !targetTask[1]
        setTask(newTask)
        console.log(newTask)

        if (targetTask[1] === true) {
            const newActivity = [...activity, `${targetTask[0]} 항목을 완료했어요`]
            setActivity(newActivity)
        }
    }

    let inboxTask = task.filter((item) => item[2] === '/inbox')

    return (
        <>
            <div className='inbox-mainpage'>
                <Sidebar currentPage={currentPage} task={task} setTask={setTask} />
                <div className='inbox-right'>
                    <div className='inbox-right-content'>
                        <h1>보관함</h1>
                        <hr />
                        <div className='inbox-tasks'>
                            {inboxTask.length === 0 ? (
                                <Emptytasks currentPage={currentPage} task={task} setTask={setTask} />
                            ):(
                                inboxTask.map((item) => {
                                    if (searchValue !== "" && !item[0].includes(searchValue)) return null
                                
                                    return(
                                        <div key={item[3]} className='inbox-task'>
                                            <input type='checkbox' onChange={() => {checkboxUpdate(item[3])}} checked={item[1]} />
                                            <input type='text' defaultValue={item[0]} onChange={(e) => {taskUpdate(item[3], e.target.value)}} />
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}