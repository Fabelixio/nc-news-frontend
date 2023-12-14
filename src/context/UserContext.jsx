import { createContext, useEffect, useState } from 'react'
import AvatarIcon from '../../assets/profile-default.svg'
import { getAllUsers}  from '../utils/api'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({username: 'guest', avatar: AvatarIcon})

    useEffect(() => {
        getAllUsers().then((res) => {
            setUser(res[0])
        })
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}