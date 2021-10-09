import ProductCategoriesActionsState, {
    productCategoriesActionsInitialState
} from '../../states/ProductCategoriesActionsState'

import { createContext } from 'react'

const ProductCategoriesActionsContext = createContext<ProductCategoriesActionsState>(
    productCategoriesActionsInitialState
)

export default ProductCategoriesActionsContext
