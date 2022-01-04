import { StockBalanceState, stockBalanceInitialState } from '../../states/StockBalanceState'

import { createContext } from 'react'

const StockBalanceContext = createContext<StockBalanceState>(stockBalanceInitialState)

export default StockBalanceContext
