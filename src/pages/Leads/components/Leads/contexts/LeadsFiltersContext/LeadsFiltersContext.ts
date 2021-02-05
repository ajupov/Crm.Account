import LeadsFiltersState, { leadsFiltersInitialState } from '../../states/LeadsFiltersState'

import { createContext } from 'react'

const LeadsFiltersContext = createContext<LeadsFiltersState>(leadsFiltersInitialState)

export default LeadsFiltersContext
