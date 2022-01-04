import React, { FC } from 'react'

import StockRoomChangesFiltersContext from './StockRoomChangesFiltersContext'
import useStockRoomChangesFilters from './hooks/useStockRoomChangesFilters'

const StockRoomChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useStockRoomChangesFilters()

    return <StockRoomChangesFiltersContext.Provider value={state}>{children}</StockRoomChangesFiltersContext.Provider>
}

export default StockRoomChangesFiltersContextProvider
