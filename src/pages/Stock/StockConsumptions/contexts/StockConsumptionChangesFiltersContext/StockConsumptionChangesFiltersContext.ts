import StockConsumptionChangesFiltersState, {
    stockConsumptionChangesFiltersInitialState
} from '../../states/StockConsumptionChangesFiltersState'

import { createContext } from 'react'

const StockConsumptionChangesFiltersContext = createContext<StockConsumptionChangesFiltersState>(
    stockConsumptionChangesFiltersInitialState
)

export default StockConsumptionChangesFiltersContext
