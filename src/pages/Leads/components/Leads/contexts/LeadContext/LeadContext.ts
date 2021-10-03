import { CustomerState, customerInitialState } from '../../states/CustomerState'

import { createContext } from 'react'

const CustomerContext = createContext<CustomerState>(customerInitialState)

export default CustomerContext
