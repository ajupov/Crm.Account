import CustomerAttributeChangesState, {
    customerAttributeChangesInitialState
} from '../../states/CustomerAttributeChangesState'

import { createContext } from 'react'

const CustomerAttributeChangesContext = createContext<CustomerAttributeChangesState>(
    customerAttributeChangesInitialState
)

export default CustomerAttributeChangesContext
