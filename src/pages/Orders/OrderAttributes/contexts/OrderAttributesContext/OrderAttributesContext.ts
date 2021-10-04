import OrderAttributesState, { orderAttributesInitialState } from '../../states/OrderAttributesState'

import { createContext } from 'react'

const OrderAttributesContext = createContext<OrderAttributesState>(orderAttributesInitialState)

export default OrderAttributesContext
