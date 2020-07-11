import React, { FC } from 'react'

import CompanyAttributesContext from './CompanyAttributesContext'
import useCompanyAttributes from './hooks/useCompanyAttributes'

const CompanyAttributesContextProvider: FC = ({ children }) => {
    const state = useCompanyAttributes()

    return <CompanyAttributesContext.Provider value={state}>{children}</CompanyAttributesContext.Provider>
}

export default CompanyAttributesContextProvider
