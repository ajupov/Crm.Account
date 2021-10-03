import { OrderTypeState, orderTypeInitialState } from '../../states/OrderTypeState'

import { createContext } from 'react'

const OrderTypeContext = createContext<OrderTypeState>(orderTypeInitialState)

export default OrderTypeContext
