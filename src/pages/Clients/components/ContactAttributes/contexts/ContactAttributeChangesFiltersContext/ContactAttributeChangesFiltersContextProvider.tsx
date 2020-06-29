import React, { FC } from 'react'

import ContactAttributeChangesFiltersContext from './ContactAttributeChangesFiltersContext'
import useContactAttributeChangesFilters from './hooks/useContactAttributeChangesFilters'

const ContactAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useContactAttributeChangesFilters()

    return (
        <ContactAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </ContactAttributeChangesFiltersContext.Provider>
    )
}

export default ContactAttributeChangesFiltersContextProvider
