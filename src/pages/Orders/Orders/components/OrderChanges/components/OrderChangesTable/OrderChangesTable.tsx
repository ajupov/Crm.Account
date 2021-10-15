import React, { FC, useContext } from 'react'

import OrderChangesContext from '../../../../contexts/OrderChangesContext/OrderChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useOrderChangesTable from './hooks/useOrderChangesTable'

const OrderChangesTable: FC = () => {
    const state = useContext(OrderChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useOrderChangesTable()

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

export default OrderChangesTable
