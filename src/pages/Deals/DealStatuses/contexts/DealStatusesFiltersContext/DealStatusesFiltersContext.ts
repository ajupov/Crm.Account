import DealStatusesFiltersState, {
    dealStatusesFiltersInitialState
} from '../../states/DealStatusesFiltersState'

import { createContext } from 'react'

const DealStatusesFiltersContext = createContext<DealStatusesFiltersState>(dealStatusesFiltersInitialState)

export default DealStatusesFiltersContext
