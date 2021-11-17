import SupplierAttributesFiltersState, {
    supplierAttributesFiltersInitialState
} from '../../states/SupplierAttributesFiltersState'

import { createContext } from 'react'

const SupplierAttributesFiltersContext = createContext<SupplierAttributesFiltersState>(
    supplierAttributesFiltersInitialState
)

export default SupplierAttributesFiltersContext
