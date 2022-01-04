import StockBalanceChangesFiltersState, {
    stockBalanceChangesFiltersInitialState
} from '../../states/StockBalanceChangesFiltersState'

import { createContext } from 'react'

const StockBalanceChangesFiltersContext = createContext<StockBalanceChangesFiltersState>(
    stockBalanceChangesFiltersInitialState
)

export default StockBalanceChangesFiltersContext
