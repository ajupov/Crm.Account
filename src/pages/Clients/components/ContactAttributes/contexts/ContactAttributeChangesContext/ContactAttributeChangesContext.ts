import ContactAttributeChangesState, {
    contactAttributeChangesInitialState
} from '../../states/ContactAttributeChangesState'

import { createContext } from 'react'

const ContactAttributeChangesContext = createContext<ContactAttributeChangesState>(contactAttributeChangesInitialState)

export default ContactAttributeChangesContext
