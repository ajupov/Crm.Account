import StockRoomChangesState, { stockRoomChangesInitialState } from '../../states/StockRoomChangesState'

import { createContext } from 'react'

const StockRoomChangesContext = createContext<StockRoomChangesState>(stockRoomChangesInitialState)

export default StockRoomChangesContext
