import StockArrivalsFiltersState, { stockArrivalsFiltersInitialState } from '../../states/StockArrivalsFiltersState'

import { createContext } from 'react'

const StockArrivalsFiltersContext = createContext<StockArrivalsFiltersState>(stockArrivalsFiltersInitialState)

export default StockArrivalsFiltersContext
