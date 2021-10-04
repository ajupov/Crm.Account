import CustomerAttributeChangesFiltersState, {
    customerAttributeChangesFiltersInitialState
} from '../../states/CustomerAttributeChangesFiltersState'

import { createContext } from 'react'

const CustomerAttributeChangesFiltersContext = createContext<CustomerAttributeChangesFiltersState>(
    customerAttributeChangesFiltersInitialState
)

export default CustomerAttributeChangesFiltersContext
