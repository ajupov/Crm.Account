import ContactCommentsState, { conactCommentsInitialState } from '../../states/ContactCommentsState'

import { createContext } from 'react'

const ContactCommentsContext = createContext<ContactCommentsState>(conactCommentsInitialState)

export default ContactCommentsContext
