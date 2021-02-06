import DealAttributeChangesState, { dealAttributeChangesInitialState } from '../../states/DealAttributeChangesState'

import { createContext } from 'react'

const DealAttributeChangesContext = createContext<DealAttributeChangesState>(dealAttributeChangesInitialState)

export default DealAttributeChangesContext
