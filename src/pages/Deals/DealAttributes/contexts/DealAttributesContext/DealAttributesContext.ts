import DealAttributesState, { dealAttributesInitialState } from '../../states/DealAttributesState'

import { createContext } from 'react'

const DealAttributesContext = createContext<DealAttributesState>(dealAttributesInitialState)

export default DealAttributesContext
