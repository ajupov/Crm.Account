import ProductStatusesActionsState, {
    productStatusesActionsInitialState
} from '../../states/ProductStatusesActionsState'

import { createContext } from 'react'

const ProductStatusesActionsContext = createContext<ProductStatusesActionsState>(productStatusesActionsInitialState)

export default ProductStatusesActionsContext
