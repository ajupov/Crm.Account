import ProductAttributesState, { productAttributesInitialState } from '../../states/ProductAttributesState'

import { createContext } from 'react'

const ProductAttributesContext = createContext<ProductAttributesState>(productAttributesInitialState)

export default ProductAttributesContext
