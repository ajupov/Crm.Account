import CompanyAttributesFiltersState, {
    companyAttributesFiltersInitialState
} from '../../states/CompanyAttributesFiltersState'

import { createContext } from 'react'

const CompanyAttributesFiltersContext = createContext<CompanyAttributesFiltersState>(
    companyAttributesFiltersInitialState
)

export default CompanyAttributesFiltersContext
