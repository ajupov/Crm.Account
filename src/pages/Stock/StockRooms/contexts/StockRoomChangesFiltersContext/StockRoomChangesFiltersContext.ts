import StockRoomChangesFiltersState, {
    stockRoomChangesFiltersInitialState
} from '../../states/StockRoomChangesFiltersState'

import { createContext } from 'react'

const StockRoomChangesFiltersContext = createContext<StockRoomChangesFiltersState>(stockRoomChangesFiltersInitialState)

export default StockRoomChangesFiltersContext
