import LeadAttributesActionsState, { leadAttributesActionsInitialState } from '../../states/LeadAttributesActionsState'

import { createContext } from 'react'

const LeadAttributesActionsContext = createContext<LeadAttributesActionsState>(leadAttributesActionsInitialState)

export default LeadAttributesActionsContext
