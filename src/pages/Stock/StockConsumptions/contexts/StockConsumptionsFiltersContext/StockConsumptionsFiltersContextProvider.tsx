import React, { FC } from 'react'

import StockConsumptionsFiltersContext from './StockConsumptionsFiltersContext'
import useStockConsumptionsFilters from './hooks/useStockConsumptionsFilters'

const StockConsumptionsFiltersContextProvider: FC = ({ children }) => {
    const state = useStockConsumptionsFilters()

    return <StockConsumptionsFiltersContext.Provider value={state}>{children}</StockConsumptionsFiltersContext.Provider>
}

export default StockConsumptionsFiltersContextProvider
