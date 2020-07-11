import React, { FC } from 'react'

import CompanyContext from './CompanyContext'
import useCompany from './hooks/useCompany'

const CompanyContextProvider: FC = ({ children }) => {
    const state = useCompany()

    return <CompanyContext.Provider value={state}>{children}</CompanyContext.Provider>
}

export default CompanyContextProvider
