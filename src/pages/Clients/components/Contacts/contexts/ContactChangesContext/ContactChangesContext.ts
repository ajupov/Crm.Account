import ContactChangesState, { contactChangesInitialState } from '../../states/ContactChangesState'

import { createContext } from 'react'

const ContactChangesContext = createContext<ContactChangesState>(contactChangesInitialState)

export default ContactChangesContext
