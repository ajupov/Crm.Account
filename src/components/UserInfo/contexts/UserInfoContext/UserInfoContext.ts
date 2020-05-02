import UserInfoState, { userInfoInitialState } from '../../states/UserInfoState'

import { createContext } from 'react'

const UserInfoContext = createContext<UserInfoState>(userInfoInitialState)

export default UserInfoContext
