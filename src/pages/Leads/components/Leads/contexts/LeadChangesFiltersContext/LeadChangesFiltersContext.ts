import CustomerChangesFiltersState, {
    customerChangesFiltersInitialState
} from '../../states/CustomerChangesFiltersState'

import { createContext } from 'react'

const CustomerChangesFiltersContext = createContext<CustomerChangesFiltersState>(customerChangesFiltersInitialState)

export default CustomerChangesFiltersContext
