import ContactAttributesState, { contactAttributesInitialState } from '../../states/ContactAttributesState'

import { createContext } from 'react'

const ContactAttributesContext = createContext<ContactAttributesState>(contactAttributesInitialState)

export default ContactAttributesContext
