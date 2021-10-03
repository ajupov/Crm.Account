import CustomerAttributesState, { customerAttributesInitialState } from '../../states/CustomerAttributesState'

import { createContext } from 'react'

const CustomerAttributesContext = createContext<CustomerAttributesState>(customerAttributesInitialState)

export default CustomerAttributesContext
