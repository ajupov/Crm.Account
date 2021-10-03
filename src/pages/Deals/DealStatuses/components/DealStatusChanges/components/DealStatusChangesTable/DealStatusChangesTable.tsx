import React, { FC, useContext } from 'react'

import OrderStatusChangesContext from '../../../../contexts/OrderStatusChangesContext/OrderStatusChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useOrderStatusChangesTable from './hooks/useOrderStatusChangesTable'

const OrderStatusChangesTable: FC = () => {
    const state = useContext(OrderStatusChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderStatusChangesTable()

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

export default OrderStatusChangesTable
