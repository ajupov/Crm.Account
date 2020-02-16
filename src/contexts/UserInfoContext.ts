import UserInfo from '../models/UserInfo'
import { createContext } from 'react'

const UserInfoContext = createContext<UserInfo>({ name: '', roles: [] })

export default UserInfoContext
