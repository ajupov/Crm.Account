import React, { FC } from 'react'

import ContactAttributeContext from './ContactAttributeContext'
import useContactAttribute from './hooks/useContactAttribute'

const ContactAttributeContextProvider: FC = ({ children }) => {
    const state = useContactAttribute()

    return <ContactAttributeContext.Provider value={state}>{children}</ContactAttributeContext.Provider>
}

export default ContactAttributeContextProvider
