import React, { FC } from 'react'

import ContactAttributesActionsContext from './ContactAttributesActionsContext'
import useContactAttributesActions from './hooks/useContactAttributesActions'

const ContactAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useContactAttributesActions()

    return <ContactAttributesActionsContext.Provider value={state}>{children}</ContactAttributesActionsContext.Provider>
}

export default ContactAttributesActionsContextProvider
