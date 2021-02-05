import LeadAttributesFiltersState, { leadAttributesFiltersInitialState } from '../../states/LeadAttributesFiltersState'

import { createContext } from 'react'

const LeadAttributesFiltersContext = createContext<LeadAttributesFiltersState>(leadAttributesFiltersInitialState)

export default LeadAttributesFiltersContext
