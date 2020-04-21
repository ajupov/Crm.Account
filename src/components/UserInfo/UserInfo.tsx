import React, { FC } from 'react'

import UserInfoContextProvider from './contexts/UserInfoContextProvider'
import UserInfoPart from './UserInfoPart'

const UserInfo: FC = () => (
    <UserInfoContextProvider>
        <UserInfoPart />
    </UserInfoContextProvider>
)

export default UserInfo
