import LeadSourcesFiltersState, {
    leadSourcesFiltersInitialState
} from '../../states/LeadSourcesFiltersState'

import { createContext } from 'react'

const LeadSourcesFiltersContext = createContext<LeadSourcesFiltersState>(leadSourcesFiltersInitialState)

export default LeadSourcesFiltersContext
