import OrdersActionsState, { ordersActionsInitialState } from '../../states/OrdersActionsState'

import { createContext } from 'react'

const OrdersActionsContext = createContext<OrdersActionsState>(ordersActionsInitialState)

export default OrdersActionsContext
