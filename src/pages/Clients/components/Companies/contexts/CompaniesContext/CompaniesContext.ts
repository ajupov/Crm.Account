import ContactsState, { conactsInitialState } from '../../states/ContactsState'

import { createContext } from 'react'

const ContactsContext = createContext<ContactsState>(conactsInitialState)

export default ContactsContext
