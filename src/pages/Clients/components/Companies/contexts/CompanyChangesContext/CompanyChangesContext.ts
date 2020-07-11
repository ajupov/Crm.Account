import CompanyChangesState, { companyChangesInitialState } from '../../states/CompanyChangesState'

import { createContext } from 'react'

const CompanyChangesContext = createContext<CompanyChangesState>(companyChangesInitialState)

export default CompanyChangesContext
