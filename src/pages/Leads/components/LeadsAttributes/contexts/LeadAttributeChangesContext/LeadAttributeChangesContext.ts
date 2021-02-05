import LeadAttributeChangesState, { leadAttributeChangesInitialState } from '../../states/LeadAttributeChangesState'

import { createContext } from 'react'

const LeadAttributeChangesContext = createContext<LeadAttributeChangesState>(leadAttributeChangesInitialState)

export default LeadAttributeChangesContext
