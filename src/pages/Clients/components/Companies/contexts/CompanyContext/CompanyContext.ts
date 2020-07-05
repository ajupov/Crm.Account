import { ContactState, contactInitialState } from '../../states/ContactState'

import { createContext } from 'react'

const ContactContext = createContext<ContactState>(contactInitialState)

export default ContactContext
