import ProductStatusesFiltersState, {
    productStatusesFiltersInitialState
} from '../../states/ProductStatusesFiltersState'

import { createContext } from 'react'

const ProductStatusesFiltersContext = createContext<ProductStatusesFiltersState>(productStatusesFiltersInitialState)

export default ProductStatusesFiltersContext
