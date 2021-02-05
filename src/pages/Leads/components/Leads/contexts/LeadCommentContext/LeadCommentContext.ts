import LeadCommentState, { leadCommentInitialState } from '../../states/LeadCommentState'

import { createContext } from 'react'

const LeadCommentContext = createContext<LeadCommentState>(leadCommentInitialState)

export default LeadCommentContext
