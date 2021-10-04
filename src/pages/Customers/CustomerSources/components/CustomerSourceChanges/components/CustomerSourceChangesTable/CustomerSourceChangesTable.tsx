import React, { FC, useContext } from 'react'

import CustomerSourceChangesContext from '../../../../contexts/CustomerSourceChangesContext/CustomerSourceChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useCustomerSourceChangesTable from './hooks/useCustomerSourceChangesTable'

const CustomerSourceChangesTable: FC = () => {
    const state = useContext(CustomerSourceChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCustomerSourceChangesTable()

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

export default CustomerSourceChangesTable
