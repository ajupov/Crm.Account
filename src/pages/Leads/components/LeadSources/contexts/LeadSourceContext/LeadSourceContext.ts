import { LeadSourceState, leadSourceInitialState } from '../../states/LeadSourceState'

import { createContext } from 'react'

const LeadSourceContext = createContext<LeadSourceState>(leadSourceInitialState)

export default LeadSourceContext
