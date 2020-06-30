import React, { FC } from 'react'

import ContactsFiltersContext from './ContactsFiltersContext'
import useContactsFilters from './hooks/useContactsFilters'

const ContactsFiltersContextProvider: FC = ({ children }) => {
    const state = useContactsFilters()

    return <ContactsFiltersContext.Provider value={state}>{children}</ContactsFiltersContext.Provider>
}

export default ContactsFiltersContextProvider
