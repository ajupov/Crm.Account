import ProductsState, { productsInitialState } from '../../states/ProductsState'

import { createContext } from 'react'

const ProductsContext = createContext<ProductsState>(productsInitialState)

export default ProductsContext
