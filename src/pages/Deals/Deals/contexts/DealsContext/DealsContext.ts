import DealsState, { dealsInitialState } from '../../states/DealsState'

import { createContext } from 'react'

const DealsContext = createContext<DealsState>(dealsInitialState)

export default DealsContext
