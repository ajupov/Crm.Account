import { ProductCategoryState, productCategoryInitial } from './ProductCategoryState'

import { createContext } from 'react'

const ProductCategoryContext = createContext<ProductCategoryState>(productCategoryInitial)

export default ProductCategoryContext
