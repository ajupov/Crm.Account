import SupplierAttributeChangesFiltersState, {
    supplierAttributeChangesFiltersInitialState
} from '../../states/SupplierAttributeChangesFiltersState'

import { createContext } from 'react'

const SupplierAttributeChangesFiltersContext = createContext<SupplierAttributeChangesFiltersState>(
    supplierAttributeChangesFiltersInitialState
)

export default SupplierAttributeChangesFiltersContext
