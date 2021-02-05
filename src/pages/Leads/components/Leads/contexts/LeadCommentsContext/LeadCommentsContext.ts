import LeadCommentsState, { leadCommentsInitialState } from '../../states/LeadCommentsState'

import { createContext } from 'react'

const LeadCommentsContext = createContext<LeadCommentsState>(leadCommentsInitialState)

export default LeadCommentsContext
