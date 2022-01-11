import SuppliersState, { suppliersInitialState } from '../../states/SuppliersState'

import { createContext } from 'react'

const SuppliersContext = createContext<SuppliersState>(suppliersInitialState)

export default SuppliersContext
