import { createContext, useState } from 'react'
import AvatarIcon from '../../assets/profile-default.svg'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({username: 'guest', avatar: AvatarIcon})

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}