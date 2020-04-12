import ProductCategoriesState, { productCategoriesInitialState } from '../states/ProductCategoriesState'

import { createContext } from 'react'

const ProductCategoriesContext = createContext<ProductCategoriesState>(productCategoriesInitialState)

export default ProductCategoriesContext
