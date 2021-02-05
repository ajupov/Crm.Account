import LeadChangesFiltersState, { leadChangesFiltersInitialState } from '../../states/LeadChangesFiltersState'

import { createContext } from 'react'

const LeadChangesFiltersContext = createContext<LeadChangesFiltersState>(leadChangesFiltersInitialState)

export default LeadChangesFiltersContext
