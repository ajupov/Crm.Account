import React, { FC } from 'react'

import Flags from '../Flags/Flags'
import UserInfoContextProvider from './contexts/UserInfoContext/UserInfoContextProvider'
import UserInfoLayout from './components/UserInfoLayout/UserInfoLayout'

const UserInfo: FC = () => (
    <UserInfoContextProvider>
        <Flags />
        <UserInfoLayout />
    </UserInfoContextProvider>
)

export default UserInfo
