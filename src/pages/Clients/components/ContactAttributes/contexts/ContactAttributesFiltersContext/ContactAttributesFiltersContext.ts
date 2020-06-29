import ContactAttributesFiltersState, {
    contactAttributesFiltersInitialState
} from '../../states/ContactAttributesFiltersState'

import { createContext } from 'react'

const ContactAttributesFiltersContext = createContext<ContactAttributesFiltersState>(
    contactAttributesFiltersInitialState
)

export default ContactAttributesFiltersContext
