import React, { FC, useContext } from 'react'

import OrderStatusesContext from '../../contexts/OrderStatusesContext/OrderStatusesContext'
import OrderStatusesRoutes from '../../routes/OrderStatusesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useOrderStatusesTable from './hooks/useOrderStatusesTable'

const OrderStatusesTable: FC = () => {
    const state = useContext(OrderStatusesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderStatusesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.statuses)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={OrderStatusesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default OrderStatusesTable
