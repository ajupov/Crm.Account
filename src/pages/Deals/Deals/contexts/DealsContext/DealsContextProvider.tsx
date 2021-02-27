import React, { FC } from 'react'

import DealsContext from './DealsContext'
import useDeals from './hooks/useDeals'

const DealsContextProvider: FC = ({ children }) => {
    const state = useDeals()

    return <DealsContext.Provider value={state}>{children}</DealsContext.Provider>
}

export default DealsContextProvider
