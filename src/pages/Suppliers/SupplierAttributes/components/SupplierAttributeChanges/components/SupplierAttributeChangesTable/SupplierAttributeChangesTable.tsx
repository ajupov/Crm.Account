import React, { FC, useContext } from 'react'

import SupplierAttributeChangesContext from '../../../../contexts/SupplierAttributeChangesContext/SupplierAttributeChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useSupplierAttributeChangesTable from './hooks/useSupplierAttributeChangesTable'

const SupplierAttributeChangesTable: FC = () => {
    const state = useContext(SupplierAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useSupplierAttributeChangesTable()

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

export default SupplierAttributeChangesTable
