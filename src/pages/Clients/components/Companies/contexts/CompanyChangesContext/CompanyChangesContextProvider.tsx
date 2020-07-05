import React, { FC } from 'react'

import ContactChangesContext from './ContactChangesContext'
import useContactChanges from './hooks/useContactChanges'

const ContactChangesContextProvider: FC = ({ children }) => {
    const state = useContactChanges()

    return <ContactChangesContext.Provider value={state}>{children}</ContactChangesContext.Provider>
}

export default ContactChangesContextProvider
