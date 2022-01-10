import StockConsumptionChangesState, {
    stockConsumptionChangesInitialState
} from '../../states/StockConsumptionChangesState'

import { createContext } from 'react'

const StockConsumptionChangesContext = createContext<StockConsumptionChangesState>(stockConsumptionChangesInitialState)

export default StockConsumptionChangesContext
