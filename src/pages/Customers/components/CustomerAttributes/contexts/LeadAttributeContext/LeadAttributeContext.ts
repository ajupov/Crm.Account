import { CustomerAttributeState, customerAttributeInitialState } from '../../states/CustomerAttributeState'

import { createContext } from 'react'

const CustomerAttributeContext = createContext<CustomerAttributeState>(customerAttributeInitialState)

export default CustomerAttributeContext
