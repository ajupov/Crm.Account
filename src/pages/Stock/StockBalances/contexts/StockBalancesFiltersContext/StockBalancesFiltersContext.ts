import StockBalancesFiltersState, { stockBalancesFiltersInitialState } from '../../states/StockBalancesFiltersState'

import { createContext } from 'react'

const StockBalancesFiltersContext = createContext<StockBalancesFiltersState>(stockBalancesFiltersInitialState)

export default StockBalancesFiltersContext
