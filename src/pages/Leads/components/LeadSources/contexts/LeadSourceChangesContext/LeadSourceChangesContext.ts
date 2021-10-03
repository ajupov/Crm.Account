import CustomerSourceChangesState, { customerSourceChangesInitialState } from '../../states/CustomerSourceChangesState'

import { createContext } from 'react'

const CustomerSourceChangesContext = createContext<CustomerSourceChangesState>(customerSourceChangesInitialState)

export default CustomerSourceChangesContext
