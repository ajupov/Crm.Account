import CompaniesState, { conactsInitialState } from '../../states/CompaniesState'

import { createContext } from 'react'

const CompaniesContext = createContext<CompaniesState>(conactsInitialState)

export default CompaniesContext
