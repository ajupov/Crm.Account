import React, { FC } from 'react'

import OrderChangesFiltersContext from './OrderChangesFiltersContext'
import useOrderChangesFilters from './hooks/useOrderChangesFilters'

const OrderChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderChangesFilters()

    return <OrderChangesFiltersContext.Provider value={state}>{children}</OrderChangesFiltersContext.Provider>
}

export default OrderChangesFiltersContextProvider
