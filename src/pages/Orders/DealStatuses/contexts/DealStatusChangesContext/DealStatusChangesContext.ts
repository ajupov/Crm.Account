import OrderStatusChangesState, { orderStatusChangesInitialState } from '../../states/OrderStatusChangesState'

import { createContext } from 'react'

const OrderStatusChangesContext = createContext<OrderStatusChangesState>(orderStatusChangesInitialState)

export default OrderStatusChangesContext
