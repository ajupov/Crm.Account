import StockRoomsActionsState, { stockRoomsActionsInitialState } from '../../states/StockRoomsActionsState'

import { createContext } from 'react'

const StockRoomsActionsContext = createContext<StockRoomsActionsState>(stockRoomsActionsInitialState)

export default StockRoomsActionsContext
