import DealAttributesFiltersState, {
    dealAttributesFiltersInitialState
} from '../../states/DealAttributesFiltersState'

import { createContext } from 'react'

const DealAttributesFiltersContext = createContext<DealAttributesFiltersState>(dealAttributesFiltersInitialState)

export default DealAttributesFiltersContext
