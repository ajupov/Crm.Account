import { SupplierState, supplierInitialState } from '../../states/SupplierState'

import { createContext } from 'react'

const SupplierContext = createContext<SupplierState>(supplierInitialState)

export default SupplierContext
