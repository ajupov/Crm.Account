import LeadSourceChangesState, { leadSourceChangesInitialState } from '../../states/LeadSourceChangesState'

import { createContext } from 'react'

const LeadSourceChangesContext = createContext<LeadSourceChangesState>(leadSourceChangesInitialState)

export default LeadSourceChangesContext
