import OrdersFiltersState, { ordersFiltersInitialState } from '../../states/OrdersFiltersState'

import { createContext } from 'react'

const OrdersFiltersContext = createContext<OrdersFiltersState>(ordersFiltersInitialState)

export default OrdersFiltersContext
