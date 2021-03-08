import React, { FC } from 'react'

import AccountFlagsContextProvider from './contexts/AccountFlagsContext/AccountFlagsContextProvider'
import FlagsLayout from './components/FlagsLayout/FlagsLayout'
import UserFlagsContextProvider from './contexts/UserFlagsContext/UserFlagsContextProvider'

const Flags: FC = () => (
    <AccountFlagsContextProvider>
        <UserFlagsContextProvider>
            <FlagsLayout />
        </UserFlagsContextProvider>
    </AccountFlagsContextProvider>
)

export default Flags
