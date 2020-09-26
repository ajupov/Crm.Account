import React, { FC } from 'react'

import CompanyCommentsContext from './CompanyCommentsContext'
import useCompanies from './hooks/useCompanyComments'

const CompanyCommentsContextProvider: FC = ({ children }) => {
    const state = useCompanies()

    return <CompanyCommentsContext.Provider value={state}>{children}</CompanyCommentsContext.Provider>
}

export default CompanyCommentsContextProvider
