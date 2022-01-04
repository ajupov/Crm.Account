import React, { FC } from 'react'

import StockRoomChangesContext from './StockRoomChangesContext'
import useStockRoomChanges from './hooks/useStockRoomChanges'

const StockRoomChangesContextProvider: FC = ({ children }) => {
    const state = useStockRoomChanges()

    return <StockRoomChangesContext.Provider value={state}>{children}</StockRoomChangesContext.Provider>
}

export default StockRoomChangesContextProvider
