import React, { FC } from 'react'

import CompaniesActionsContext from './CompaniesActionsContext'
import useCompaniesActions from './hooks/useCompaniesActions'

const CompaniesActionsContextProvider: FC = ({ children }) => {
    const state = useCompaniesActions()

    return <CompaniesActionsContext.Provider value={state}>{children}</CompaniesActionsContext.Provider>
}

export default CompaniesActionsContextProvider
