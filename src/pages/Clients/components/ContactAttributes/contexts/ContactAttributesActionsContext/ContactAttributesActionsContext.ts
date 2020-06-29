import ContactAttributesActionsState, {
    contactAttributesActionsInitialState
} from '../../states/ContactAttributesActionsState'

import { createContext } from 'react'

const ContactAttributesActionsContext = createContext<ContactAttributesActionsState>(
    contactAttributesActionsInitialState
)

export default ContactAttributesActionsContext
