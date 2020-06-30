import React, { FC } from 'react'

import ContactContext from './ContactContext'
import useContact from './hooks/useContact'

const ContactContextProvider: FC = ({ children }) => {
    const state = useContact()

    return <ContactContext.Provider value={state}>{children}</ContactContext.Provider>
}

export default ContactContextProvider
