import React, { FC, useContext } from 'react'

import SupplierChangesContext from '../../../../contexts/SupplierChangesContext/SupplierChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useSupplierChangesTable from './hooks/useSupplierChangesTable'

const SupplierChangesTable: FC = () => {
    const state = useContext(SupplierChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useSupplierChangesTable()

    return (
        <Table
            isLoading={state.isLoading}
            headers={headers}
            rows={map(state.changes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default SupplierChangesTable
