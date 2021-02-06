import DealAttributesActionsState, {
    dealAttributesActionsInitialState
} from '../../states/DealAttributesActionsState'

import { createContext } from 'react'

const DealAttributesActionsContext = createContext<DealAttributesActionsState>(dealAttributesActionsInitialState)

export default DealAttributesActionsContext
