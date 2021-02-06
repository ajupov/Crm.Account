import { DealStatusState, dealStatusInitialState } from '../../states/DealStatusState'

import { createContext } from 'react'

const DealStatusContext = createContext<DealStatusState>(dealStatusInitialState)

export default DealStatusContext
