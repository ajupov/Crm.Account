import { CompanyState, companyInitialState } from '../../states/CompanyState'

import { createContext } from 'react'

const CompanyContext = createContext<CompanyState>(companyInitialState)

export default CompanyContext
