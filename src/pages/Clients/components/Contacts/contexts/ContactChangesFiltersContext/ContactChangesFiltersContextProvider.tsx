import React, { FC } from 'react'

import ContactChangesFiltersContext from './ContactChangesFiltersContext'
import useContactChangesFilters from './hooks/useContactChangesFilters'

const ContactChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useContactChangesFilters()

    return <ContactChangesFiltersContext.Provider value={state}>{children}</ContactChangesFiltersContext.Provider>
}

export default ContactChangesFiltersContextProvider
