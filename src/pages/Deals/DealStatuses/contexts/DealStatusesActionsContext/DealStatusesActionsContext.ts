import DealStatusesActionsState, {
    dealStatusesActionsInitialState
} from '../../states/DealStatusesActionsState'

import { createContext } from 'react'

const DealStatusesActionsContext = createContext<DealStatusesActionsState>(dealStatusesActionsInitialState)

export default DealStatusesActionsContext
