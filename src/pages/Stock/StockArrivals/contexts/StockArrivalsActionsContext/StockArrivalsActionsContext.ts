import StockArrivalsActionsState, { stockArrivalsActionsInitialState } from '../../states/StockArrivalsActionsState'

import { createContext } from 'react'

const StockArrivalsActionsContext = createContext<StockArrivalsActionsState>(stockArrivalsActionsInitialState)

export default StockArrivalsActionsContext
