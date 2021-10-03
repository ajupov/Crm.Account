import CustomerSourceChangesFiltersState, {
    customerSourceChangesFiltersInitialState
} from '../../states/CustomerSourceChangesFiltersState'

import { createContext } from 'react'

const CustomerSourceChangesFiltersContext = createContext<CustomerSourceChangesFiltersState>(
    customerSourceChangesFiltersInitialState
)

export default CustomerSourceChangesFiltersContext
