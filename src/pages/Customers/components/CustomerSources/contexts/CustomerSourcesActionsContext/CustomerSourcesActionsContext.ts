import CustomerSourcesActionsState, {
    customerSourcesActionsInitialState
} from '../../states/CustomerSourcesActionsState'

import { createContext } from 'react'

const CustomerSourcesActionsContext = createContext<CustomerSourcesActionsState>(customerSourcesActionsInitialState)

export default CustomerSourcesActionsContext
