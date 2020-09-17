import ContactCommentState, { contactCommentInitialState } from '../../states/ContactCommentState'

import { createContext } from 'react'

const ContactCommentContext = createContext<ContactCommentState>(contactCommentInitialState)

export default ContactCommentContext
