import StockConsumptionsFiltersState, {
    stockConsumptionsFiltersInitialState
} from '../../states/StockConsumptionsFiltersState'

import { createContext } from 'react'

const StockConsumptionsFiltersContext = createContext<StockConsumptionsFiltersState>(
    stockConsumptionsFiltersInitialState
)

export default StockConsumptionsFiltersContext
