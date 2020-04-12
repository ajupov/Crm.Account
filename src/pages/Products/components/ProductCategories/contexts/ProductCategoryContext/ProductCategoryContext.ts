import { ProductCategoryState, productCategoryInitialState } from '../../states/ProductCategoryState'

import { createContext } from 'react'

const ProductCategoryContext = createContext<ProductCategoryState>(productCategoryInitialState)

export default ProductCategoryContext
