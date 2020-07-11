import { CompanyAttributeState, companyAttributeInitialState } from '../../states/CompanyAttributeState'

import { createContext } from 'react'

const CompanyAttributeContext = createContext<CompanyAttributeState>(companyAttributeInitialState)

export default CompanyAttributeContext
