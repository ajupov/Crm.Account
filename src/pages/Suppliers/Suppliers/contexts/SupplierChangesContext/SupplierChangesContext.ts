import SupplierChangesState, { supplierChangesInitialState } from '../../states/SupplierChangesState'

import { createContext } from 'react'

const SupplierChangesContext = createContext<SupplierChangesState>(supplierChangesInitialState)

export default SupplierChangesContext
