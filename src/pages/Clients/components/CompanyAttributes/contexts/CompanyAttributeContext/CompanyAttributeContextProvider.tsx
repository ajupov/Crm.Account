import React, { FC } from 'react'

import CompanyAttributeContext from './CompanyAttributeContext'
import useCompanyAttribute from './hooks/useCompanyAttribute'

const CompanyAttributeContextProvider: FC = ({ children }) => {
    const state = useCompanyAttribute()

    return <CompanyAttributeContext.Provider value={state}>{children}</CompanyAttributeContext.Provider>
}

export default CompanyAttributeContextProvider
