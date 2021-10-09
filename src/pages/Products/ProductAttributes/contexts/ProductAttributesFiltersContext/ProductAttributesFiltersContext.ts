import ProductAttributesFiltersState, {
    productAttributesFiltersInitialState
} from '../../states/ProductAttributesFiltersState'

import { createContext } from 'react'

const ProductAttributesFiltersContext = createContext<ProductAttributesFiltersState>(productAttributesFiltersInitialState)

export default ProductAttributesFiltersContext
