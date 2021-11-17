import SuppliersState, { conactsInitialState } from '../../states/SuppliersState'

import { createContext } from 'react'

const SuppliersContext = createContext<SuppliersState>(conactsInitialState)

export default SuppliersContext
