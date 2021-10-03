import OrderTypeChangesFiltersState, {
    orderTypeChangesFiltersInitialState
} from '../../states/OrderTypeChangesFiltersState'

import { createContext } from 'react'

const OrderTypeChangesFiltersContext = createContext<OrderTypeChangesFiltersState>(orderTypeChangesFiltersInitialState)

export default OrderTypeChangesFiltersContext
