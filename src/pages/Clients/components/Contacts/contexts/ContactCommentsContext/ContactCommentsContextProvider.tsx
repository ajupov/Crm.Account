import React, { FC } from 'react'

import ContactCommentsContext from './ContactCommentsContext'
import useContacts from './hooks/useContactComments'

const ContactCommentsContextProvider: FC = ({ children }) => {
    const state = useContacts()

    return <ContactCommentsContext.Provider value={state}>{children}</ContactCommentsContext.Provider>
}

export default ContactCommentsContextProvider
