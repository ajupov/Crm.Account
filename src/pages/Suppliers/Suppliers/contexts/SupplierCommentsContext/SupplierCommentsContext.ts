import SupplierCommentsState, { supplierCommentsInitialState } from '../../states/SupplierCommentsState'

import { createContext } from 'react'

const SupplierCommentsContext = createContext<SupplierCommentsState>(supplierCommentsInitialState)

export default SupplierCommentsContext
