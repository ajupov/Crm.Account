import React, { FC } from 'react'

import ContactsContext from './ContactsContext'
import useContacts from './hooks/useContacts'

const ContactsContextProvider: FC = ({ children }) => {
    const state = useContacts()

    return <ContactsContext.Provider value={state}>{children}</ContactsContext.Provider>
}

export default ContactsContextProvider
