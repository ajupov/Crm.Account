import OrderAttributeChangesFiltersState, {
    orderAttributeChangesFiltersInitialState
} from '../../states/OrderAttributeChangesFiltersState'

import { createContext } from 'react'

const OrderAttributeChangesFiltersContext = createContext<OrderAttributeChangesFiltersState>(
    orderAttributeChangesFiltersInitialState
)

export default OrderAttributeChangesFiltersContext
