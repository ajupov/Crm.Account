import { LeadAttributeState, leadAttributeInitialState } from '../../states/LeadAttributeState'

import { createContext } from 'react'

const LeadAttributeContext = createContext<LeadAttributeState>(leadAttributeInitialState)

export default LeadAttributeContext
