import React, { FC } from 'react'

import StockRoomContext from './StockRoomContext'
import useStockRoom from './hooks/useStockRoom'

const StockRoomContextProvider: FC = ({ children }) => {
    const state = useStockRoom()

    return <StockRoomContext.Provider value={state}>{children}</StockRoomContext.Provider>
}

export default StockRoomContextProvider
