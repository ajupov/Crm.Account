import React, { FC } from 'react'

import ContactAttributesFiltersContext from './ContactAttributesFiltersContext'
import useContactAttributesFilters from './hooks/useContactAttributesFilters'

const ContactAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useContactAttributesFilters()

    return <ContactAttributesFiltersContext.Provider value={state}>{children}</ContactAttributesFiltersContext.Provider>
}

export default ContactAttributesFiltersContextProvider
