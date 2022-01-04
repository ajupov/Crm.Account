import React, { FC } from 'react'

import StockRoomsFiltersContext from './StockRoomsFiltersContext'
import useStockRoomsFilters from './hooks/useStockRoomsFilters'

const StockRoomsFiltersContextProvider: FC = ({ children }) => {
    const state = useStockRoomsFilters()

    return <StockRoomsFiltersContext.Provider value={state}>{children}</StockRoomsFiltersContext.Provider>
}

export default StockRoomsFiltersContextProvider
