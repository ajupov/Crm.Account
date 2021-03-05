import React, { FC } from 'react'

import FlagsContext from './FlagsContext'
import useFlags from './hooks/useFlags'

const FlagContextProvider: FC = ({ children }) => {
    const state = useFlags()

    return <FlagsContext.Provider value={state}>{children}</FlagsContext.Provider>
}

export default FlagContextProvider
