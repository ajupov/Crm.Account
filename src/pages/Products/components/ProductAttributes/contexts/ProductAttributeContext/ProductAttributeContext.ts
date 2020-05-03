import { ProductAttributeState, productAttributeInitialState } from '../../states/ProductAttributeState'

import { createContext } from 'react'

const ProductAttributeContext = createContext<ProductAttributeState>(productAttributeInitialState)

export default ProductAttributeContext
