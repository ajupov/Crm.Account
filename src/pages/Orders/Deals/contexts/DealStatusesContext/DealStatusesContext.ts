import OrderStatusesState, { orderStatusesInitialState } from '../../states/OrderStatusesState'

import { createContext } from 'react'

const OrderStatusesContext = createContext<OrderStatusesState>(orderStatusesInitialState)

export default OrderStatusesContext
