import CustomerAttributesFiltersState, {
    customerAttributesFiltersInitialState
} from '../../states/CustomerAttributesFiltersState'

import { createContext } from 'react'

const CustomerAttributesFiltersContext = createContext<CustomerAttributesFiltersState>(
    customerAttributesFiltersInitialState
)

export default CustomerAttributesFiltersContext
