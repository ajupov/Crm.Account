import CompanyAttributesActionsState, {
    companyAttributesActionsInitialState
} from '../../states/CompanyAttributesActionsState'

import { createContext } from 'react'

const CompanyAttributesActionsContext = createContext<CompanyAttributesActionsState>(
    companyAttributesActionsInitialState
)

export default CompanyAttributesActionsContext
