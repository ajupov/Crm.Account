import LeadSourceChangesFiltersState, {
    leadSourceChangesFiltersInitialState
} from '../../states/LeadSourceChangesFiltersState'

import { createContext } from 'react'

const LeadSourceChangesFiltersContext = createContext<LeadSourceChangesFiltersState>(
    leadSourceChangesFiltersInitialState
)

export default LeadSourceChangesFiltersContext
