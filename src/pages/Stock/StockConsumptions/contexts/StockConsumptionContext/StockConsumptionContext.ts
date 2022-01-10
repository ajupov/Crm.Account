import { StockConsumptionState, stockConsumptionInitialState } from '../../states/StockConsumptionState'

import { createContext } from 'react'

const StockConsumptionContext = createContext<StockConsumptionState>(stockConsumptionInitialState)

export default StockConsumptionContext
