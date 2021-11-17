import SupplierCommentState, { supplierCommentInitialState } from '../../states/SupplierCommentState'

import { createContext } from 'react'

const SupplierCommentContext = createContext<SupplierCommentState>(supplierCommentInitialState)

export default SupplierCommentContext
