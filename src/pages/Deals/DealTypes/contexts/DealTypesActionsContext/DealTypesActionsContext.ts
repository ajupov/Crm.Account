import DealTypesActionsState, {
    dealTypesActionsInitialState
} from '../../states/DealTypesActionsState'

import { createContext } from 'react'

const DealTypesActionsContext = createContext<DealTypesActionsState>(dealTypesActionsInitialState)

export default DealTypesActionsContext
