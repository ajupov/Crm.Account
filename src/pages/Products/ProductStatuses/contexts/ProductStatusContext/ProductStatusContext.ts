import { ProductStatusState, productStatusInitialState } from '../../states/ProductStatusState'

import { createContext } from 'react'

const ProductStatusContext = createContext<ProductStatusState>(productStatusInitialState)

export default ProductStatusContext
