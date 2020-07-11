import CompanyAttributeChangesFiltersState, {
    companyAttributeChangesFiltersInitialState
} from '../../states/CompanyAttributeChangesFiltersState'

import { createContext } from 'react'

const CompanyAttributeChangesFiltersContext = createContext<CompanyAttributeChangesFiltersState>(
    companyAttributeChangesFiltersInitialState
)

export default CompanyAttributeChangesFiltersContext
