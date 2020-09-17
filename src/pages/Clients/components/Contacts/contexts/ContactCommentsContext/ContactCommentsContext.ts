import ContactCommentsState, { contactCommentsInitialState } from '../../states/ContactCommentsState'

import { createContext } from 'react'

const ContactCommentsContext = createContext<ContactCommentsState>(contactCommentsInitialState)

export default ContactCommentsContext
