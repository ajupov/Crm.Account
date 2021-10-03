import React, { FC } from 'react'

import CustomerAttributesContext from './CustomerAttributesContext'
import useCustomerAttributes from './hooks/useCustomerAttributes'

const CustomerAttributesContextProvider: FC = ({ children }) => {
    const state = useCustomerAttributes()

    return <CustomerAttributesContext.Provider value={state}>{children}</CustomerAttributesContext.Provider>
}

export default CustomerAttributesContextProvider
