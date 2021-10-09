import ProductAttributesActionsState, {
    productAttributesActionsInitialState
} from '../../states/ProductAttributesActionsState'

import { createContext } from 'react'

const ProductAttributesActionsContext = createContext<ProductAttributesActionsState>(productAttributesActionsInitialState)

export default ProductAttributesActionsContext
