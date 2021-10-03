import OrderAttributesActionsState, {
    orderAttributesActionsInitialState
} from '../../states/OrderAttributesActionsState'

import { createContext } from 'react'

const OrderAttributesActionsContext = createContext<OrderAttributesActionsState>(orderAttributesActionsInitialState)

export default OrderAttributesActionsContext
