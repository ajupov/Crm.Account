import CustomerAttributesActionsState, {
    customerAttributesActionsInitialState
} from '../../states/CustomerAttributesActionsState'

import { createContext } from 'react'

const CustomerAttributesActionsContext = createContext<CustomerAttributesActionsState>(
    customerAttributesActionsInitialState
)

export default CustomerAttributesActionsContext
