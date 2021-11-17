import React, { FC } from 'react'

import SupplierCommentContext from './SupplierCommentContext'
import useSuppliers from './hooks/useSupplierComment'

const SupplierCommentContextProvider: FC = ({ children }) => {
    const state = useSuppliers()

    return <SupplierCommentContext.Provider value={state}>{children}</SupplierCommentContext.Provider>
}

export default SupplierCommentContextProvider
