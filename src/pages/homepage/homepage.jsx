import './homepage.css'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()

    return (
        <>
            <h1>landing page</h1>
            <h1 onClick={() => {navigate('/inbox')}}>get started</h1>
        </>
    )
}