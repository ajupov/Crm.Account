import SuppliersFiltersState, { suppliersFiltersInitialState } from '../../states/SuppliersFiltersState'

import { createContext } from 'react'

const SuppliersFiltersContext = createContext<SuppliersFiltersState>(suppliersFiltersInitialState)

export default SuppliersFiltersContext
