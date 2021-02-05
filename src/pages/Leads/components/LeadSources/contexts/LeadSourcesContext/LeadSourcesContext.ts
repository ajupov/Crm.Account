import LeadSourcesState, { leadSourcesInitialState } from '../../states/LeadSourcesState'

import { createContext } from 'react'

const LeadSourcesContext = createContext<LeadSourcesState>(leadSourcesInitialState)

export default LeadSourcesContext
