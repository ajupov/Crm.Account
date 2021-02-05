import LeadsState, { conactsInitialState } from '../../states/LeadsState'

import { createContext } from 'react'

const LeadsContext = createContext<LeadsState>(conactsInitialState)

export default LeadsContext
