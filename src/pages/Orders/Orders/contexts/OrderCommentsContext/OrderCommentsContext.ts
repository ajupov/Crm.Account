import OrderCommentsState, { orderCommentsInitialState } from '../../states/OrderCommentsState'

import { createContext } from 'react'

const OrderCommentsContext = createContext<OrderCommentsState>(orderCommentsInitialState)

export default OrderCommentsContext
