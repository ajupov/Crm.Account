import React, { FC, useContext } from 'react'

import CustomerSourcesContext from '../../contexts/CustomerSourcesContext/CustomerSourcesContext'
import CustomerSourcesRoutes from '../../routes/CustomerSourcesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useCustomerSourcesTable from './hooks/useCustomerSourcesTable'

const CustomerSourcesTable: FC = () => {
    const state = useContext(CustomerSourcesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCustomerSourcesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.sources)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={CustomerSourcesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CustomerSourcesTable
