import React, { FC } from 'react'

import ContactsActionsContext from './ContactsActionsContext'
import useContactsActions from './hooks/useContactsActions'

const ContactsActionsContextProvider: FC = ({ children }) => {
    const state = useContactsActions()

    return <ContactsActionsContext.Provider value={state}>{children}</ContactsActionsContext.Provider>
}

export default ContactsActionsContextProvider
