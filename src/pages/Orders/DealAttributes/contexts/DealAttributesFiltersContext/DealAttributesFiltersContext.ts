import OrderAttributesFiltersState, {
    orderAttributesFiltersInitialState
} from '../../states/OrderAttributesFiltersState'

import { createContext } from 'react'

const OrderAttributesFiltersContext = createContext<OrderAttributesFiltersState>(orderAttributesFiltersInitialState)

export default OrderAttributesFiltersContext
