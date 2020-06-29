import React, { FC } from 'react'

import ContactAttributeChangesContext from './ContactAttributeChangesContext'
import useContactAttributeChanges from './hooks/useContactAttributeChanges'

const ContactAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useContactAttributeChanges()

    return <ContactAttributeChangesContext.Provider value={state}>{children}</ContactAttributeChangesContext.Provider>
}

export default ContactAttributeChangesContextProvider
