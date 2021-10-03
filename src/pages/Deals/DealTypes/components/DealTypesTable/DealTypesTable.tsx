import React, { FC, useContext } from 'react'

import OrderTypesContext from '../../contexts/OrderTypesContext/OrderTypesContext'
import OrderTypesRoutes from '../../routes/OrderTypesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useOrderTypesTable from './hooks/useOrderTypesTable'

const OrderTypesTable: FC = () => {
    const state = useContext(OrderTypesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderTypesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.types)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={OrderTypesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default OrderTypesTable
