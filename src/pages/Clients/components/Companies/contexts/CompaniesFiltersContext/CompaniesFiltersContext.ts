import CompaniesFiltersState, { companiesFiltersInitialState } from '../../states/CompaniesFiltersState'

import { createContext } from 'react'

const CompaniesFiltersContext = createContext<CompaniesFiltersState>(companiesFiltersInitialState)

export default CompaniesFiltersContext
