import { OrderState, orderInitialState } from '../../states/OrderState'

import { createContext } from 'react'

const OrderContext = createContext<OrderState>(orderInitialState)

export default OrderContext
