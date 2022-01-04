import { StockRoomState, stockRoomInitialState } from '../../states/StockRoomState'

import { createContext } from 'react'

const StockRoomContext = createContext<StockRoomState>(stockRoomInitialState)

export default StockRoomContext
