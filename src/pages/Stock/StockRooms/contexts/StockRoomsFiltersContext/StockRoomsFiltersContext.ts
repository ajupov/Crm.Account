import StockRoomsFiltersState, { stockRoomsFiltersInitialState } from '../../states/StockRoomsFiltersState'

import { createContext } from 'react'

const StockRoomsFiltersContext = createContext<StockRoomsFiltersState>(stockRoomsFiltersInitialState)

export default StockRoomsFiltersContext
