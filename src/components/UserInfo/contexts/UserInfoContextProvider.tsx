import React, { FC } from 'react'

import UserInfoContext from './UserInfoContext'
import useUserInfo from '../hooks/useUserInfo'

const UserInfoContextProvider: FC = ({ children }) => {
    const state = useUserInfo()

    return <UserInfoContext.Provider value={state}>{children}</UserInfoContext.Provider>
}

export default UserInfoContextProvider
