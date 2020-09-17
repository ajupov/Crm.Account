import React, { FC } from 'react'

import ContactCommentContext from './ContactCommentContext'
import useContacts from './hooks/useContactComment'

const ContactCommentContextProvider: FC = ({ children }) => {
    const state = useContacts()

    return <ContactCommentContext.Provider value={state}>{children}</ContactCommentContext.Provider>
}

export default ContactCommentContextProvider
