import ProductStatusesState, { productStatusesInitialState } from '../../states/ProductStatusesState'

import { createContext } from 'react'

const ProductStatusesContext = createContext<ProductStatusesState>(productStatusesInitialState)

export default ProductStatusesContext
