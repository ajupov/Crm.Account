import OrderCommentState, { orderCommentInitialState } from '../../states/OrderCommentState'

import { createContext } from 'react'

const OrderCommentContext = createContext<OrderCommentState>(orderCommentInitialState)

export default OrderCommentContext
