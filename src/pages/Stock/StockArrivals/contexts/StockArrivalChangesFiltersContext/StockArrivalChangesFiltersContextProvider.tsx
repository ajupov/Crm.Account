import React, { FC } from 'react'

import StockArrivalChangesFiltersContext from './StockArrivalChangesFiltersContext'
import useStockArrivalChangesFilters from './hooks/useStockArrivalChangesFilters'

const StockArrivalChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useStockArrivalChangesFilters()

    return (
        <StockArrivalChangesFiltersContext.Provider value={state}>
            {children}
        </StockArrivalChangesFiltersContext.Provider>
    )
}

export default StockArrivalChangesFiltersContextProvider
