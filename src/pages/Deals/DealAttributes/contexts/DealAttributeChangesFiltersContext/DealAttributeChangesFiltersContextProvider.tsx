import React, { FC } from 'react'

import OrderAttributeChangesFiltersContext from './OrderAttributeChangesFiltersContext'
import useOrderAttributeChangesFilters from './hooks/useOrderAttributeChangesFilters'

const OrderAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderAttributeChangesFilters()

    return (
        <OrderAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </OrderAttributeChangesFiltersContext.Provider>
    )
}

export default OrderAttributeChangesFiltersContextProvider
