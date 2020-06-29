import ProductCategoryChangesFiltersState, {
    productCategoryChangesFiltersInitialState
} from '../../states/ProductCategoryChangesFiltersState'

import { createContext } from 'react'

const ProductCategoryChangesFiltersContext = createContext<ProductCategoryChangesFiltersState>(
    productCategoryChangesFiltersInitialState
)

export default ProductCategoryChangesFiltersContext
