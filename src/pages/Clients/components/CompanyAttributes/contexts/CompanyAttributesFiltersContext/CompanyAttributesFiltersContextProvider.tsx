import React, { FC } from 'react'

import CompanyAttributesFiltersContext from './CompanyAttributesFiltersContext'
import useCompanyAttributesFilters from './hooks/useCompanyAttributesFilters'

const CompanyAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useCompanyAttributesFilters()

    return <CompanyAttributesFiltersContext.Provider value={state}>{children}</CompanyAttributesFiltersContext.Provider>
}

export default CompanyAttributesFiltersContextProvider
