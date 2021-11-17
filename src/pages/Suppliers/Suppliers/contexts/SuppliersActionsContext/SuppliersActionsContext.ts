import SuppliersActionsState, { suppliersActionsInitialState } from '../../states/SuppliersActionsState'

import { createContext } from 'react'

const SuppliersActionsContext = createContext<SuppliersActionsState>(suppliersActionsInitialState)

export default SuppliersActionsContext
