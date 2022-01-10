import React, { FC } from 'react'

import StockConsumptionChangesFiltersContext from './StockConsumptionChangesFiltersContext'
import useStockConsumptionChangesFilters from './hooks/useStockConsumptionChangesFilters'

const StockConsumptionChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useStockConsumptionChangesFilters()

    return (
        <StockConsumptionChangesFiltersContext.Provider value={state}>
            {children}
        </StockConsumptionChangesFiltersContext.Provider>
    )
}

export default StockConsumptionChangesFiltersContextProvider
