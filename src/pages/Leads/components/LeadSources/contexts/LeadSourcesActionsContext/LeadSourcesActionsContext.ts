import LeadSourcesActionsState, {
    leadSourcesActionsInitialState
} from '../../states/LeadSourcesActionsState'

import { createContext } from 'react'

const LeadSourcesActionsContext = createContext<LeadSourcesActionsState>(leadSourcesActionsInitialState)

export default LeadSourcesActionsContext
