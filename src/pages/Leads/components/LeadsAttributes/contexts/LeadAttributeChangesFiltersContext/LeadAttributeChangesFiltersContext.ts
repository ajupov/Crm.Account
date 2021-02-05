import LeadAttributeChangesFiltersState, {
    leadAttributeChangesFiltersInitialState
} from '../../states/LeadAttributeChangesFiltersState'

import { createContext } from 'react'

const LeadAttributeChangesFiltersContext = createContext<LeadAttributeChangesFiltersState>(
    leadAttributeChangesFiltersInitialState
)

export default LeadAttributeChangesFiltersContext
