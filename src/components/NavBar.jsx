import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="text-center">
            <Link to='/'>
            <button className='m-3 underline'>Home</button>
            </Link>
            <Link to='/articles'>
            <button className='m-3 underline'>Articles</button>
            </Link>
            <Link to='/topics'>
            <button className='m-3 underline'>Topics</button>
            </Link>
        </nav>
    )
}

export default NavBar