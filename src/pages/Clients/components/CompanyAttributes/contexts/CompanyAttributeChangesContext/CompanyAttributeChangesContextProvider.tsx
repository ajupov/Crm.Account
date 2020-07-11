import React, { FC } from 'react'

import CompanyAttributeChangesContext from './CompanyAttributeChangesContext'
import useCompanyAttributeChanges from './hooks/useCompanyAttributeChanges'

const CompanyAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useCompanyAttributeChanges()

    return <CompanyAttributeChangesContext.Provider value={state}>{children}</CompanyAttributeChangesContext.Provider>
}

export default CompanyAttributeChangesContextProvider
