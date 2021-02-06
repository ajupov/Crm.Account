import { DealAttributeState, dealAttributeInitialState } from '../../states/DealAttributeState'

import { createContext } from 'react'

const DealAttributeContext = createContext<DealAttributeState>(dealAttributeInitialState)

export default DealAttributeContext
