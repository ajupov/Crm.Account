import React, { FC } from 'react'

import CompaniesContext from './CompaniesContext'
import useCompanies from './hooks/useCompanies'

const CompaniesContextProvider: FC = ({ children }) => {
    const state = useCompanies()

    return <CompaniesContext.Provider value={state}>{children}</CompaniesContext.Provider>
}

export default CompaniesContextProvider
