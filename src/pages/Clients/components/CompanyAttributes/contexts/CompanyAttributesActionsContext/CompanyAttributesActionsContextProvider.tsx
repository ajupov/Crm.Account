import React, { FC } from 'react'

import CompanyAttributesActionsContext from './CompanyAttributesActionsContext'
import useCompanyAttributesActions from './hooks/useCompanyAttributesActions'

const CompanyAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useCompanyAttributesActions()

    return <CompanyAttributesActionsContext.Provider value={state}>{children}</CompanyAttributesActionsContext.Provider>
}

export default CompanyAttributesActionsContextProvider
