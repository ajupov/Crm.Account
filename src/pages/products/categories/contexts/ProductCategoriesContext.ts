import ProductCategoriesState, { productCategoriesInitial } from './ProductCategoriesState'

import { createContext } from 'react'

const ProductCategoriesContext = createContext<ProductCategoriesState>(productCategoriesInitial)

export default ProductCategoriesContext
