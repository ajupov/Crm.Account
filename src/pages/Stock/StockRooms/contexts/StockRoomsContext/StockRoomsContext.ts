import StockRoomsState, { stockRoomsInitialState } from '../../states/StockRoomsState'

import { createContext } from 'react'

const StockRoomsContext = createContext<StockRoomsState>(stockRoomsInitialState)

export default StockRoomsContext
