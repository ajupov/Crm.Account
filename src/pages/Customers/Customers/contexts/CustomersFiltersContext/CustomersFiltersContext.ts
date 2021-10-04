import CustomersFiltersState, { customersFiltersInitialState } from '../../states/CustomersFiltersState'

import { createContext } from 'react'

const CustomersFiltersContext = createContext<CustomersFiltersState>(customersFiltersInitialState)

export default CustomersFiltersContext
