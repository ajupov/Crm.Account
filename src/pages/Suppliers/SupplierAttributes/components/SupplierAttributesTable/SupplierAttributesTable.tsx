import React, { FC, useContext } from 'react'

import SupplierAttributesContext from '../../contexts/SupplierAttributesContext/SupplierAttributesContext'
import SupplierAttributesRoutes from '../../routes/SupplierAttributesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useSupplierAttributesTable from './hooks/useSupplierAttributesTable'

const SupplierAttributesTable: FC = () => {
    const state = useContext(SupplierAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useSupplierAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={SupplierAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default SupplierAttributesTable
