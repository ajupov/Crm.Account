import StockArrivalsState, { stockArrivalsInitialState } from '../../states/StockArrivalsState'

import { createContext } from 'react'

const StockArrivalsContext = createContext<StockArrivalsState>(stockArrivalsInitialState)

export default StockArrivalsContext
