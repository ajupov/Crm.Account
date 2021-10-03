import React, { FC, useContext } from 'react'

import CustomersContext from '../../contexts/CustomersContext/CustomersContext'
import CustomersRoutes from '../../routes/CustomersRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useCustomersTable from './hooks/useCustomersTable'

const CustomersTable: FC = () => {
    const state = useContext(CustomersContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCustomersTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.customers)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={CustomersRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CustomersTable
