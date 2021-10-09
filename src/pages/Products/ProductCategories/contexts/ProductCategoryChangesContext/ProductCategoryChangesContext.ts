import ProductCategoryChangesState, {
    productCategoryChangesInitialState
} from '../../states/ProductCategoryChangesState'

import { createContext } from 'react'

const ProductCategoryChangesContext = createContext<ProductCategoryChangesState>(productCategoryChangesInitialState)

export default ProductCategoryChangesContext
