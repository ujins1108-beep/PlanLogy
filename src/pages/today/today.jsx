import './today.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import Emptytasks from '../../components/emptytasks/emptytasks.jsx'

export default function Today({ currentPage, setCurrentPage, task, setTask, searchValue, activity, setActivity }) {
    var location = useLocation()

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

    function deleteTask(id) {
        const newTask = [...task]
        const targetTask = newTask.findIndex(item => item[3] === id)
        newTask.splice(targetTask, 1)
        setTask(newTask)
        console.log(newTask)
    }

    let todayTask = task.filter((item) => item[2] === '/today')

    return (
        <>
            <div className='today-mainpage'>
                <Sidebar currentPage={currentPage} task={task} setTask={setTask} />
                <div className='today-right'>
                    <div className='today-right-content'>
                        <h1>오늘</h1>
                        <hr />
                        <div className='today-tasks'>
                            {todayTask.length === 0 ? (
                                <Emptytasks currentPage={currentPage} task={task} setTask={setTask} />
                            ):(
                                todayTask.map((item) => {
                                    if (searchValue !== "" && !item[0].includes(searchValue)) return null
                                
                                    return(
                                        <div key={item[3]} className='today-task'>
                                            <input type='checkbox' onChange={() => {checkboxUpdate(item[3])}} checked={item[1]} />
                                            <input type='text' defaultValue={item[0]} onChange={(e) => {taskUpdate(item[3], e.target.value)}} />
                                            <div onClick={() => {deleteTask(item[3])}}>×</div>
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