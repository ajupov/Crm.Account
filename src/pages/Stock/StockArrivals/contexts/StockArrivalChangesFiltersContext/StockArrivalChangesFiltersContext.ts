import StockArrivalChangesFiltersState, {
    stockArrivalChangesFiltersInitialState
} from '../../states/StockArrivalChangesFiltersState'

import { createContext } from 'react'

const StockArrivalChangesFiltersContext = createContext<StockArrivalChangesFiltersState>(
    stockArrivalChangesFiltersInitialState
)

export default StockArrivalChangesFiltersContext
