import SupplierChangesFiltersState, {
    supplierChangesFiltersInitialState
} from '../../states/SupplierChangesFiltersState'

import { createContext } from 'react'

const SupplierChangesFiltersContext = createContext<SupplierChangesFiltersState>(supplierChangesFiltersInitialState)

export default SupplierChangesFiltersContext
