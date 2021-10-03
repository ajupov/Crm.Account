import OrderStatusesActionsState, { orderStatusesActionsInitialState } from '../../states/OrderStatusesActionsState'

import { createContext } from 'react'

const OrderStatusesActionsContext = createContext<OrderStatusesActionsState>(orderStatusesActionsInitialState)

export default OrderStatusesActionsContext
