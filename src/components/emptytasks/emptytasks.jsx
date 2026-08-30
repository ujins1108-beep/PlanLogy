import './emptytasks.css'

export default function Emptytasks({ currentPage, task, setTask }) {
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
        <div className='emptytasks-box'>
            <h1>일정이 없어요</h1>
            <div className='addTask-button' onClick={addTask}>새 일정 만들기</div>
        </div>
    )
}