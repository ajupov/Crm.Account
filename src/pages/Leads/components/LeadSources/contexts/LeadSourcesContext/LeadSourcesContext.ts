import CustomerSourcesState, { customerSourcesInitialState } from '../../states/CustomerSourcesState'

import { createContext } from 'react'

const CustomerSourcesContext = createContext<CustomerSourcesState>(customerSourcesInitialState)

export default CustomerSourcesContext
