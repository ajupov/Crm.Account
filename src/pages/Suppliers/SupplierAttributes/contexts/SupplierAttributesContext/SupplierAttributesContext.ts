import SupplierAttributesState, { supplierAttributesInitialState } from '../../states/SupplierAttributesState'

import { createContext } from 'react'

const SupplierAttributesContext = createContext<SupplierAttributesState>(supplierAttributesInitialState)

export default SupplierAttributesContext
