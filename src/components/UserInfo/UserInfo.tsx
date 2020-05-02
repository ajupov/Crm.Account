import React, { FC } from 'react'

import UserInfoContextProvider from './contexts/UserInfoContext/UserInfoContextProvider'
import UserInfoLayout from './components/UserInfoLayout/UserInfoLayout'

const UserInfo: FC = () => (
    <UserInfoContextProvider>
        <UserInfoLayout />
    </UserInfoContextProvider>
)

export default UserInfo
