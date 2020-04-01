import UserInfo, { userInfoInitial } from './UserInfo'

import { createContext } from 'react'

const UserInfoContext = createContext<UserInfo>(userInfoInitial)

export default UserInfoContext
