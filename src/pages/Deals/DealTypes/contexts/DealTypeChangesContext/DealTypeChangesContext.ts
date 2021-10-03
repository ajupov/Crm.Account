import OrderTypeChangesState, { orderTypeChangesInitialState } from '../../states/OrderTypeChangesState'

import { createContext } from 'react'

const OrderTypeChangesContext = createContext<OrderTypeChangesState>(orderTypeChangesInitialState)

export default OrderTypeChangesContext
