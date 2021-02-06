import DealTypesFiltersState, {
    dealTypesFiltersInitialState
} from '../../states/DealTypesFiltersState'

import { createContext } from 'react'

const DealTypesFiltersContext = createContext<DealTypesFiltersState>(dealTypesFiltersInitialState)

export default DealTypesFiltersContext
