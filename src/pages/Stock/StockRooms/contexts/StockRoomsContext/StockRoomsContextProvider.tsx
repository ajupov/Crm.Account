import React, { FC } from 'react'

import StockRoomsContext from './StockRoomsContext'
import useStockRooms from './hooks/useStockRooms'

const StockRoomsContextProvider: FC = ({ children }) => {
    const state = useStockRooms()

    return <StockRoomsContext.Provider value={state}>{children}</StockRoomsContext.Provider>
}

export default StockRoomsContextProvider
