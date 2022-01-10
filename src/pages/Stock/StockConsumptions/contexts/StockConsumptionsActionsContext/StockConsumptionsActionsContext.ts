import StockConsumptionsActionsState, {
    stockConsumptionsActionsInitialState
} from '../../states/StockConsumptionsActionsState'

import { createContext } from 'react'

const StockConsumptionsActionsContext = createContext<StockConsumptionsActionsState>(
    stockConsumptionsActionsInitialState
)

export default StockConsumptionsActionsContext
