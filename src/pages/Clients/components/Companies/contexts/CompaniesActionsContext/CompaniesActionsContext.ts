import CompaniesActionsState, { companiesActionsInitialState } from '../../states/CompaniesActionsState'

import { createContext } from 'react'

const CompaniesActionsContext = createContext<CompaniesActionsState>(companiesActionsInitialState)

export default CompaniesActionsContext
