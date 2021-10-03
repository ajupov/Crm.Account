import OrderStatusesFiltersState, { orderStatusesFiltersInitialState } from '../../states/OrderStatusesFiltersState'

import { createContext } from 'react'

const OrderStatusesFiltersContext = createContext<OrderStatusesFiltersState>(orderStatusesFiltersInitialState)

export default OrderStatusesFiltersContext
