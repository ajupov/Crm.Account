import React, { FC, useContext } from 'react'

import OrderAttributesContext from '../../contexts/OrderAttributesContext/OrderAttributesContext'
import OrderAttributesRoutes from '../../routes/OrderAttributesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useOrderAttributesTable from './hooks/useOrderAttributesTable'

const OrderAttributesTable: FC = () => {
    const state = useContext(OrderAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={OrderAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default OrderAttributesTable
