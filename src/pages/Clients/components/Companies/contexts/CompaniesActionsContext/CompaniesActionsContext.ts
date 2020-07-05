import ContactsActionsState, { contactsActionsInitialState } from '../../states/ContactsActionsState'

import { createContext } from 'react'

const ContactsActionsContext = createContext<ContactsActionsState>(contactsActionsInitialState)

export default ContactsActionsContext
