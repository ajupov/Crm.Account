import DealAttributeChangesFiltersState, {
    dealAttributeChangesFiltersInitialState
} from '../../states/DealAttributeChangesFiltersState'

import { createContext } from 'react'

const DealAttributeChangesFiltersContext = createContext<DealAttributeChangesFiltersState>(
    dealAttributeChangesFiltersInitialState
)

export default DealAttributeChangesFiltersContext
