import { DealTypeState, dealTypeInitialState } from '../../states/DealTypeState'

import { createContext } from 'react'

const DealTypeContext = createContext<DealTypeState>(dealTypeInitialState)

export default DealTypeContext
