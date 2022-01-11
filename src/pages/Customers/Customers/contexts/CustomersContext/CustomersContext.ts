import CustomersState, { customersInitialState } from '../../states/CustomersState'

import { createContext } from 'react'

const CustomersContext = createContext<CustomersState>(customersInitialState)

export default CustomersContext
