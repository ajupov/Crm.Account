import OrderStatusChangesFiltersState, {
    orderStatusChangesFiltersInitialState
} from '../../states/OrderStatusChangesFiltersState'

import { createContext } from 'react'

const OrderStatusChangesFiltersContext = createContext<OrderStatusChangesFiltersState>(
    orderStatusChangesFiltersInitialState
)

export default OrderStatusChangesFiltersContext
