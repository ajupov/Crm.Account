import SupplierAttributesActionsState, {
    supplierAttributesActionsInitialState
} from '../../states/SupplierAttributesActionsState'

import { createContext } from 'react'

const SupplierAttributesActionsContext = createContext<SupplierAttributesActionsState>(
    supplierAttributesActionsInitialState
)

export default SupplierAttributesActionsContext
