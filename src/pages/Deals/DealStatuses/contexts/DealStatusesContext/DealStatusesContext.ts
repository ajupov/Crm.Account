import DealStatusesState, { dealStatusesInitialState } from '../../states/DealStatusesState'

import { createContext } from 'react'

const DealStatusesContext = createContext<DealStatusesState>(dealStatusesInitialState)

export default DealStatusesContext
