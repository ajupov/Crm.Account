import ContactAttributeChangesFiltersState, {
    contactAttributeChangesFiltersInitialState
} from '../../states/ContactAttributeChangesFiltersState'

import { createContext } from 'react'

const ContactAttributeChangesFiltersContext = createContext<ContactAttributeChangesFiltersState>(
    contactAttributeChangesFiltersInitialState
)

export default ContactAttributeChangesFiltersContext
