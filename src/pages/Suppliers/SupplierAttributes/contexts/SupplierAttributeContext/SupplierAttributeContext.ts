import { SupplierAttributeState, supplierAttributeInitialState } from '../../states/SupplierAttributeState'

import { createContext } from 'react'

const SupplierAttributeContext = createContext<SupplierAttributeState>(supplierAttributeInitialState)

export default SupplierAttributeContext
