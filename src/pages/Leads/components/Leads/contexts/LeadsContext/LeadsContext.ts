import CustomersState, { conactsInitialState } from '../../states/CustomersState'

import { createContext } from 'react'

const CustomersContext = createContext<CustomersState>(conactsInitialState)

export default CustomersContext
