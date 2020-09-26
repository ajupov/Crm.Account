import CompanyCommentsState, { companyCommentsInitialState } from '../../states/CompanyCommentsState'

import { createContext } from 'react'

const CompanyCommentsContext = createContext<CompanyCommentsState>(companyCommentsInitialState)

export default CompanyCommentsContext
