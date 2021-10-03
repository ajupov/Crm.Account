import OrderTypesFiltersState, { orderTypesFiltersInitialState } from '../../states/OrderTypesFiltersState'

import { createContext } from 'react'

const OrderTypesFiltersContext = createContext<OrderTypesFiltersState>(orderTypesFiltersInitialState)

export default OrderTypesFiltersContext
