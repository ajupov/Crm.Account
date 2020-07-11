import React, { FC } from 'react'

import CompanyAttributeChangesFiltersContext from './CompanyAttributeChangesFiltersContext'
import useCompanyAttributeChangesFilters from './hooks/useCompanyAttributeChangesFilters'

const CompanyAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useCompanyAttributeChangesFilters()

    return (
        <CompanyAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </CompanyAttributeChangesFiltersContext.Provider>
    )
}

export default CompanyAttributeChangesFiltersContextProvider
