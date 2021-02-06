import DealStatusChangesState, { dealStatusChangesInitialState } from '../../states/DealStatusChangesState'

import { createContext } from 'react'

const DealStatusChangesContext = createContext<DealStatusChangesState>(dealStatusChangesInitialState)

export default DealStatusChangesContext
