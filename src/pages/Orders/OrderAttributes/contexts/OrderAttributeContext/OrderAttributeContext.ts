import { OrderAttributeState, orderAttributeInitialState } from '../../states/OrderAttributeState'

import { createContext } from 'react'

const OrderAttributeContext = createContext<OrderAttributeState>(orderAttributeInitialState)

export default OrderAttributeContext
