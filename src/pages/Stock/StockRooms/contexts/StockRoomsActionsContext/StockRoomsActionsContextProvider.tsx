import React, { FC } from 'react'

import StockRoomsActionsContext from './StockRoomsActionsContext'
import useStockRoomsActions from './hooks/useStockRoomsActions'

const StockRoomsActionsContextProvider: FC = ({ children }) => {
    const state = useStockRoomsActions()

    return <StockRoomsActionsContext.Provider value={state}>{children}</StockRoomsActionsContext.Provider>
}

export default StockRoomsActionsContextProvider
