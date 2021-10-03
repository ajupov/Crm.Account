import OrdersState, { ordersInitialState } from '../../states/OrdersState'

import { createContext } from 'react'

const OrdersContext = createContext<OrdersState>(ordersInitialState)

export default OrdersContext
