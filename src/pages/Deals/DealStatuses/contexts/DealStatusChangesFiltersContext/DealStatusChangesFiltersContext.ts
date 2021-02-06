import DealStatusChangesFiltersState, {
    dealStatusChangesFiltersInitialState
} from '../../states/DealStatusChangesFiltersState'

import { createContext } from 'react'

const DealStatusChangesFiltersContext = createContext<DealStatusChangesFiltersState>(
    dealStatusChangesFiltersInitialState
)

export default DealStatusChangesFiltersContext
