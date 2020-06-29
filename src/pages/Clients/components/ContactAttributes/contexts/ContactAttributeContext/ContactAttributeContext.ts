import { ContactAttributeState, contactAttributeInitialState } from '../../states/ContactAttributeState'

import { createContext } from 'react'

const ContactAttributeContext = createContext<ContactAttributeState>(contactAttributeInitialState)

export default ContactAttributeContext
