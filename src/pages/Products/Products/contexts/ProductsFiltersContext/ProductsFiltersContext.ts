import ProductsFiltersState, {
    productsFiltersInitialState
} from '../../states/ProductsFiltersState'

import { createContext } from 'react'

const ProductsFiltersContext = createContext<ProductsFiltersState>(productsFiltersInitialState)

export default ProductsFiltersContext
