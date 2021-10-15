import OrdersState, { conactsInitialState } from '../../states/OrdersState'

import { createContext } from 'react'

const OrdersContext = createContext<OrdersState>(conactsInitialState)

export default OrdersContext
