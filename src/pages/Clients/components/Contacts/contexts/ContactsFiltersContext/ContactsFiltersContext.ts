import ContactsFiltersState, { contactsFiltersInitialState } from '../../states/ContactsFiltersState'

import { createContext } from 'react'

const ContactsFiltersContext = createContext<ContactsFiltersState>(contactsFiltersInitialState)

export default ContactsFiltersContext
