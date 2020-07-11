import React, { FC } from 'react'

import CompanyChangesContext from './CompanyChangesContext'
import useCompanyChanges from './hooks/useCompanyChanges'

const CompanyChangesContextProvider: FC = ({ children }) => {
    const state = useCompanyChanges()

    return <CompanyChangesContext.Provider value={state}>{children}</CompanyChangesContext.Provider>
}

export default CompanyChangesContextProvider
