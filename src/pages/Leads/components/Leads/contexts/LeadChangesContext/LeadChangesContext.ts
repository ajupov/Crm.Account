import CustomerChangesState, { customerChangesInitialState } from '../../states/CustomerChangesState'

import { createContext } from 'react'

const CustomerChangesContext = createContext<CustomerChangesState>(customerChangesInitialState)

export default CustomerChangesContext
