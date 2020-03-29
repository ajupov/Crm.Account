import UserInfo from '../models/UserInfo'
import { createContext } from 'react'

const UserInfoContext = createContext<UserInfo>({ isAuthenticated: false, name: '', roles: [] })

export default UserInfoContext
