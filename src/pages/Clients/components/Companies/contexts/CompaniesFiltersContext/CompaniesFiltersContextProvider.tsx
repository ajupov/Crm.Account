import React, { FC } from 'react'

import CompaniesFiltersContext from './CompaniesFiltersContext'
import useCompaniesFilters from './hooks/useCompaniesFilters'

const CompaniesFiltersContextProvider: FC = ({ children }) => {
    const state = useCompaniesFilters()

    return <CompaniesFiltersContext.Provider value={state}>{children}</CompaniesFiltersContext.Provider>
}

export default CompaniesFiltersContextProvider
