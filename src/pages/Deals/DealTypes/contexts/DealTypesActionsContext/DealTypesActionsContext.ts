import OrderTypesActionsState, { orderTypesActionsInitialState } from '../../states/OrderTypesActionsState'

import { createContext } from 'react'

const OrderTypesActionsContext = createContext<OrderTypesActionsState>(orderTypesActionsInitialState)

export default OrderTypesActionsContext
