import React, { FC } from 'react'

import UserFlagsContext from './UserFlagsContext'
import useUserFlags from './hooks/useUserFlags'

const UserFlagsContextProvider: FC = ({ children }) => {
    const state = useUserFlags()

    return <UserFlagsContext.Provider value={state}>{children}</UserFlagsContext.Provider>
}

export default UserFlagsContextProvider
