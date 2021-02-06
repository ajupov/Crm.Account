import DealTypesState, { dealTypesInitialState } from '../../states/DealTypesState'

import { createContext } from 'react'

const DealTypesContext = createContext<DealTypesState>(dealTypesInitialState)

export default DealTypesContext
