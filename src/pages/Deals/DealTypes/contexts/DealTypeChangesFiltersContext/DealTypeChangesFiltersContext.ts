import DealTypeChangesFiltersState, {
    dealTypeChangesFiltersInitialState
} from '../../states/DealTypeChangesFiltersState'

import { createContext } from 'react'

const DealTypeChangesFiltersContext = createContext<DealTypeChangesFiltersState>(
    dealTypeChangesFiltersInitialState
)

export default DealTypeChangesFiltersContext
