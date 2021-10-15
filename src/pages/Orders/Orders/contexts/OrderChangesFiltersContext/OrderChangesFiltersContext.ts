import OrderChangesFiltersState, { orderChangesFiltersInitialState } from '../../states/OrderChangesFiltersState'

import { createContext } from 'react'

const OrderChangesFiltersContext = createContext<OrderChangesFiltersState>(orderChangesFiltersInitialState)

export default OrderChangesFiltersContext
