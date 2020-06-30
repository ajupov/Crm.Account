import ContactChangesFiltersState, { contactChangesFiltersInitialState } from '../../states/ContactChangesFiltersState'

import { createContext } from 'react'

const ContactChangesFiltersContext = createContext<ContactChangesFiltersState>(contactChangesFiltersInitialState)

export default ContactChangesFiltersContext
