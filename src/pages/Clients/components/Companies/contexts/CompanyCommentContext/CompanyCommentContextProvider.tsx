import React, { FC } from 'react'

import CompanyCommentContext from './CompanyCommentContext'
import useCompanies from './hooks/useCompanyComment'

const CompanyCommentContextProvider: FC = ({ children }) => {
    const state = useCompanies()

    return <CompanyCommentContext.Provider value={state}>{children}</CompanyCommentContext.Provider>
}

export default CompanyCommentContextProvider
