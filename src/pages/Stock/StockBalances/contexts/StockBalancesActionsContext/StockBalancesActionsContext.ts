import StockBalancesActionsState, { stockBalancesActionsInitialState } from '../../states/StockBalancesActionsState'

import { createContext } from 'react'

const StockBalancesActionsContext = createContext<StockBalancesActionsState>(stockBalancesActionsInitialState)

export default StockBalancesActionsContext
