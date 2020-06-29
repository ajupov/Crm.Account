import React, { FC } from 'react'

import ContactAttributesContext from './ContactAttributesContext'
import useContactAttributes from './hooks/useContactAttributes'

const ContactAttributesContextProvider: FC = ({ children }) => {
    const state = useContactAttributes()

    return <ContactAttributesContext.Provider value={state}>{children}</ContactAttributesContext.Provider>
}

export default ContactAttributesContextProvider
