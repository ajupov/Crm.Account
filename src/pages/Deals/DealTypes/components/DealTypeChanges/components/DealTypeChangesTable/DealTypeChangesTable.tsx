import React, { FC, useContext } from 'react'

import OrderTypeChangesContext from '../../../../contexts/OrderTypeChangesContext/OrderTypeChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useOrderTypeChangesTable from './hooks/useOrderTypeChangesTable'

const OrderTypeChangesTable: FC = () => {
    const state = useContext(OrderTypeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderTypeChangesTable()

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

export default OrderTypeChangesTable
