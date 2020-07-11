import CompanyAttributeChangesState, {
    companyAttributeChangesInitialState
} from '../../states/CompanyAttributeChangesState'

import { createContext } from 'react'

const CompanyAttributeChangesContext = createContext<CompanyAttributeChangesState>(companyAttributeChangesInitialState)

export default CompanyAttributeChangesContext
