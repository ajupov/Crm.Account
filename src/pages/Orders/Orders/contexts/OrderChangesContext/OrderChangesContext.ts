import OrderChangesState, { orderChangesInitialState } from '../../states/OrderChangesState'

import { createContext } from 'react'

const OrderChangesContext = createContext<OrderChangesState>(orderChangesInitialState)

export default OrderChangesContext
