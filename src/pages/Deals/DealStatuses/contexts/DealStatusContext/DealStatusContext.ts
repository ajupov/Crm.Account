import { OrderStatusState, orderStatusInitialState } from '../../states/OrderStatusState'

import { createContext } from 'react'

const OrderStatusContext = createContext<OrderStatusState>(orderStatusInitialState)

export default OrderStatusContext
