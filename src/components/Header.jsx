import { useContext } from "react"
import { UserContext } from '../context/UserContext'


const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <>
        <div>
            <h1 className="font-young underline text-center text-5xl text-hue-light">NC News</h1>
        </div>
        <div className="m-2.5">
            <img className="w-20 h-20 m-2.5" src={user.avatar_url} alt={user.username} />
            <p className="p-2.5">{user.username}</p>
        </div>
        </>
    )
}

export default Header