import ProductsActionsState, {
    productsActionsInitialState
} from '../../states/ProductsActionsState'

import { createContext } from 'react'

const ProductsActionsContext = createContext<ProductsActionsState>(productsActionsInitialState)

export default ProductsActionsContext
