import CustomersActionsState, { customersActionsInitialState } from '../../states/CustomersActionsState'

import { createContext } from 'react'

const CustomersActionsContext = createContext<CustomersActionsState>(customersActionsInitialState)

export default CustomersActionsContext
