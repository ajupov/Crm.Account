import LeadAttributesState, { leadAttributesInitialState } from '../../states/LeadAttributesState'

import { createContext } from 'react'

const LeadAttributesContext = createContext<LeadAttributesState>(leadAttributesInitialState)

export default LeadAttributesContext
