import CustomerCommentState, { customerCommentInitialState } from '../../states/CustomerCommentState'

import { createContext } from 'react'

const CustomerCommentContext = createContext<CustomerCommentState>(customerCommentInitialState)

export default CustomerCommentContext
