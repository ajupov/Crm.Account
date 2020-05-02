import ProductStatusChangesFiltersState, {
    productStatusChangesFiltersInitialState
} from '../../states/ProductStatusChangesFiltersState'

import { createContext } from 'react'

const ProductStatusChangesFiltersContext = createContext<ProductStatusChangesFiltersState>(
    productStatusChangesFiltersInitialState
)

export default ProductStatusChangesFiltersContext
