import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
            <button>Home</button>
            </Link>
            <Link to='/articles'>
            <button>Articles</button>
            </Link>
            <Link to='/topics'>
            <button>Topics</button>
            </Link>
        </nav>
    )
}

export default NavBar