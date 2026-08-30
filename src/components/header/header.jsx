import './header.css'
import search from '../../assets/search.png'
import { useNavigate } from 'react-router-dom'

export default function Header( { searchInputValue, setSearchInputValue, searchValue, setSearchValue } ) {
    const navigate = useNavigate()

    return (
        <>
            <div className='header-box'>
                <div className='header-left'>
                    <h1 className='logotext' onClick={() => {navigate('/')}}>PlanLogy</h1>
                </div>
                <div className='header-middle'>
                    <div className='search-box'>
                        <img src={search} className='search-icon' onClick={() => {setSearchValue(searchInputValue)}} />
                        <input className='search-input' placeholder='일정들을 검색해보세요' value={searchInputValue} onChange={(e) => {setSearchInputValue(e.target.value)}} />
                    </div>
                </div>
                <div className='header-right'>
                    <h1>d</h1>
                </div>
            </div>
        </>
    )
}