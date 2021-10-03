import CustomerCommentsState, { customerCommentsInitialState } from '../../states/CustomerCommentsState'

import { createContext } from 'react'

const CustomerCommentsContext = createContext<CustomerCommentsState>(customerCommentsInitialState)

export default CustomerCommentsContext
