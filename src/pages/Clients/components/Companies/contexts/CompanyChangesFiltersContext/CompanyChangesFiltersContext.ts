import CompanyChangesFiltersState, { companyChangesFiltersInitialState } from '../../states/CompanyChangesFiltersState'

import { createContext } from 'react'

const CompanyChangesFiltersContext = createContext<CompanyChangesFiltersState>(companyChangesFiltersInitialState)

export default CompanyChangesFiltersContext
