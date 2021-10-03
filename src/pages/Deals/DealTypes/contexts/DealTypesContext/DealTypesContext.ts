import OrderTypesState, { orderTypesInitialState } from '../../states/OrderTypesState'

import { createContext } from 'react'

const OrderTypesContext = createContext<OrderTypesState>(orderTypesInitialState)

export default OrderTypesContext
