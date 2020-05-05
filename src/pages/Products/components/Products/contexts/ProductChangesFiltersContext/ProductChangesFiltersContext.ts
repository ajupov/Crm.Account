import ProductChangesFiltersState, {
    productChangesFiltersInitialState
} from '../../states/ProductChangesFiltersState'

import { createContext } from 'react'

const ProductChangesFiltersContext = createContext<ProductChangesFiltersState>(
    productChangesFiltersInitialState
)

export default ProductChangesFiltersContext
