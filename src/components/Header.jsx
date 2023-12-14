import { useContext } from "react"
import { UserContext } from '../context/UserContext'


const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <>
        <div>
            <h1 className="font-young underline text-center text-5xl text-hue-light">NC News</h1>
        </div>
        <div>
        <img className="w-10 h-10" src={user.avatar_url} alt={user.username} />
        <p>{user.username}</p>
        </div>
        </>
    )
}

export default Header