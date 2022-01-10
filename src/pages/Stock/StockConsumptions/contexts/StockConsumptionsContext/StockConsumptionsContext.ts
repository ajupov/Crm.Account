import StockConsumptionsState, { stockConsumptionsInitialState } from '../../states/StockConsumptionsState'

import { createContext } from 'react'

const StockConsumptionsContext = createContext<StockConsumptionsState>(stockConsumptionsInitialState)

export default StockConsumptionsContext
