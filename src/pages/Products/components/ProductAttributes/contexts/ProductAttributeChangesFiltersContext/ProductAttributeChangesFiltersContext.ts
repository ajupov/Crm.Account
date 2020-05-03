import ProductAttributeChangesFiltersState, {
    productAttributeChangesFiltersInitialState
} from '../../states/ProductAttributeChangesFiltersState'

import { createContext } from 'react'

const ProductAttributeChangesFiltersContext = createContext<ProductAttributeChangesFiltersState>(
    productAttributeChangesFiltersInitialState
)

export default ProductAttributeChangesFiltersContext
