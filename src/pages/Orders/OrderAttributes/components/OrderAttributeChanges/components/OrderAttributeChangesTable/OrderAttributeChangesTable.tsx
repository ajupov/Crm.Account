import React, { FC, useContext } from 'react'

import OrderAttributeChangesContext from '../../../../contexts/OrderAttributeChangesContext/OrderAttributeChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useOrderAttributeChangesTable from './hooks/useOrderAttributeChangesTable'

const OrderAttributeChangesTable: FC = () => {
    const state = useContext(OrderAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderAttributeChangesTable()

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

export default OrderAttributeChangesTable
