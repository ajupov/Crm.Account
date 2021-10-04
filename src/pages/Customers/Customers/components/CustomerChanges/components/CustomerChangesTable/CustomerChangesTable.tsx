import React, { FC, useContext } from 'react'

import CustomerChangesContext from '../../../../contexts/CustomerChangesContext/CustomerChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useCustomerChangesTable from './hooks/useCustomerChangesTable'

const CustomerChangesTable: FC = () => {
    const state = useContext(CustomerChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCustomerChangesTable()

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

export default CustomerChangesTable
