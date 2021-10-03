import React, { FC } from 'react'

import OrderAttributesFiltersContext from './OrderAttributesFiltersContext'
import useOrderAttributesFilters from './hooks/useOrderAttributesFilters'

const OrderAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderAttributesFilters()

    return <OrderAttributesFiltersContext.Provider value={state}>{children}</OrderAttributesFiltersContext.Provider>
}

export default OrderAttributesFiltersContextProvider
