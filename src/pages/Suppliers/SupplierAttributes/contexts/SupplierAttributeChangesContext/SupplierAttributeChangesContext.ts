import SupplierAttributeChangesState, {
    supplierAttributeChangesInitialState
} from '../../states/SupplierAttributeChangesState'

import { createContext } from 'react'

const SupplierAttributeChangesContext = createContext<SupplierAttributeChangesState>(
    supplierAttributeChangesInitialState
)

export default SupplierAttributeChangesContext
