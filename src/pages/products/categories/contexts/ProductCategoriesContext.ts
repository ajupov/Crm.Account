import ProductCategories, { productCategoriesInitial } from './ProductCategories'

import { createContext } from 'react'

const ProductCategoriesContext = createContext<ProductCategories>(productCategoriesInitial)

export default ProductCategoriesContext
