import CustomerSourcesFiltersState, {
    customerSourcesFiltersInitialState
} from '../../states/CustomerSourcesFiltersState'

import { createContext } from 'react'

const CustomerSourcesFiltersContext = createContext<CustomerSourcesFiltersState>(customerSourcesFiltersInitialState)

export default CustomerSourcesFiltersContext
