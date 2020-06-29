import ProductChangesState, { productChangesInitialState } from '../../states/ProductChangesState'

import { createContext } from 'react'

const ProductChangesContext = createContext<ProductChangesState>(productChangesInitialState)

export default ProductChangesContext
