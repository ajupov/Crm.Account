import DealTypeChangesState, { dealTypeChangesInitialState } from '../../states/DealTypeChangesState'

import { createContext } from 'react'

const DealTypeChangesContext = createContext<DealTypeChangesState>(dealTypeChangesInitialState)

export default DealTypeChangesContext
