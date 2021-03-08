import React, { FC } from 'react'

import AccountFlagsContext from './AccountFlagsContext'
import useAccountFlags from './hooks/useAccountFlags'

const AccountFlagsContextProvider: FC = ({ children }) => {
    const state = useAccountFlags()

    return <AccountFlagsContext.Provider value={state}>{children}</AccountFlagsContext.Provider>
}

export default AccountFlagsContextProvider
