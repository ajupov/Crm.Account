import { CustomerSourceState, customerSourceInitialState } from '../../states/CustomerSourceState'

import { createContext } from 'react'

const CustomerSourceContext = createContext<CustomerSourceState>(customerSourceInitialState)

export default CustomerSourceContext
