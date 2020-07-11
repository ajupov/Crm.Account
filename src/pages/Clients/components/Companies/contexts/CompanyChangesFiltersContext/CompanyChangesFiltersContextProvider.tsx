import React, { FC } from 'react'

import CompanyChangesFiltersContext from './CompanyChangesFiltersContext'
import useCompanyChangesFilters from './hooks/useCompanyChangesFilters'

const CompanyChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useCompanyChangesFilters()

    return <CompanyChangesFiltersContext.Provider value={state}>{children}</CompanyChangesFiltersContext.Provider>
}

export default CompanyChangesFiltersContextProvider
