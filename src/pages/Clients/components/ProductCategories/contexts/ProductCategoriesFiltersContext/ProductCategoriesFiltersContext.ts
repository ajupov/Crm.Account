import ProductCategoriesFiltersState, {
    productCategoriesFiltersInitialState
} from '../../states/ProductCategoriesFiltersState'

import { createContext } from 'react'

const ProductCategoriesFiltersContext = createContext<ProductCategoriesFiltersState>(
    productCategoriesFiltersInitialState
)

export default ProductCategoriesFiltersContext
