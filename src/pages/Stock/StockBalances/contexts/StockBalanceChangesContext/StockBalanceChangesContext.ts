import StockBalanceChangesState, { stockBalanceChangesInitialState } from '../../states/StockBalanceChangesState'

import { createContext } from 'react'

const StockBalanceChangesContext = createContext<StockBalanceChangesState>(stockBalanceChangesInitialState)

export default StockBalanceChangesContext
