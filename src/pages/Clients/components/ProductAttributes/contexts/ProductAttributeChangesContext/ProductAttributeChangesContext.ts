import ProductAttributeChangesState, { productAttributeChangesInitialState } from '../../states/ProductAttributeChangesState'

import { createContext } from 'react'

const ProductAttributeChangesContext = createContext<ProductAttributeChangesState>(productAttributeChangesInitialState)

export default ProductAttributeChangesContext
