import CompanyAttributesState, { companyAttributesInitialState } from '../../states/CompanyAttributesState'

import { createContext } from 'react'

const CompanyAttributesContext = createContext<CompanyAttributesState>(companyAttributesInitialState)

export default CompanyAttributesContext
