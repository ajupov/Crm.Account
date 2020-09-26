import CompanyCommentState, { companyCommentInitialState } from '../../states/CompanyCommentState'

import { createContext } from 'react'

const CompanyCommentContext = createContext<CompanyCommentState>(companyCommentInitialState)

export default CompanyCommentContext
