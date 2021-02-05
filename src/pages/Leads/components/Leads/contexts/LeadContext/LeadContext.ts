import { LeadState, leadInitialState } from '../../states/LeadState'

import { createContext } from 'react'

const LeadContext = createContext<LeadState>(leadInitialState)

export default LeadContext
