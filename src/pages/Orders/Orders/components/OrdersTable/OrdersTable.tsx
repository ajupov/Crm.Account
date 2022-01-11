import React, { FC, useContext } from 'react'

import OrdersContext from '../../contexts/OrdersContext/OrdersContext'
import OrdersRoutes from '../../routes/OrdersRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useOrdersTable from './hooks/useOrdersTable'

const OrdersTable: FC = () => {
    const state = useContext(OrdersContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrdersTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.orders, state.customers)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={OrdersRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default OrdersTable
