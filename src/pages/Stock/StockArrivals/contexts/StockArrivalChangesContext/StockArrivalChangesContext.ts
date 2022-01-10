import StockArrivalChangesState, { stockArrivalChangesInitialState } from '../../states/StockArrivalChangesState'

import { createContext } from 'react'

const StockArrivalChangesContext = createContext<StockArrivalChangesState>(stockArrivalChangesInitialState)

export default StockArrivalChangesContext
