import LeadChangesState, { leadChangesInitialState } from '../../states/LeadChangesState'

import { createContext } from 'react'

const LeadChangesContext = createContext<LeadChangesState>(leadChangesInitialState)

export default LeadChangesContext
