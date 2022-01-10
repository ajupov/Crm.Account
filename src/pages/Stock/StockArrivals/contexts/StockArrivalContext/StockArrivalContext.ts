import { StockArrivalState, stockArrivalInitialState } from '../../states/StockArrivalState'

import { createContext } from 'react'

const StockArrivalContext = createContext<StockArrivalState>(stockArrivalInitialState)

export default StockArrivalContext
