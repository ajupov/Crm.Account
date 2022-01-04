import StockBalancesState, { stockBalancesInitialState } from '../../states/StockBalancesState'

import { createContext } from 'react'

const StockBalancesContext = createContext<StockBalancesState>(stockBalancesInitialState)

export default StockBalancesContext
