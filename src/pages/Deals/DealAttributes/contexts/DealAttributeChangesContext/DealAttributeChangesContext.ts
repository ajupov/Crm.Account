import OrderAttributeChangesState, { orderAttributeChangesInitialState } from '../../states/OrderAttributeChangesState'

import { createContext } from 'react'

const OrderAttributeChangesContext = createContext<OrderAttributeChangesState>(orderAttributeChangesInitialState)

export default OrderAttributeChangesContext
