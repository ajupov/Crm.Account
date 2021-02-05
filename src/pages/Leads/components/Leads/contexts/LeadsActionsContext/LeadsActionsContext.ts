import LeadsActionsState, { leadsActionsInitialState } from '../../states/LeadsActionsState'

import { createContext } from 'react'

const LeadsActionsContext = createContext<LeadsActionsState>(leadsActionsInitialState)

export default LeadsActionsContext
