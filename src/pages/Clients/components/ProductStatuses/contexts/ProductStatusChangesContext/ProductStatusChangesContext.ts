import ProductStatusChangesState, { productStatusChangesInitialState } from '../../states/ProductStatusChangesState'

import { createContext } from 'react'

const ProductStatusChangesContext = createContext<ProductStatusChangesState>(productStatusChangesInitialState)

export default ProductStatusChangesContext
