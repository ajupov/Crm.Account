import { ProductState, productInitialState } from '../../states/ProductState'

import { createContext } from 'react'

const ProductContext = createContext<ProductState>(productInitialState)

export default ProductContext
