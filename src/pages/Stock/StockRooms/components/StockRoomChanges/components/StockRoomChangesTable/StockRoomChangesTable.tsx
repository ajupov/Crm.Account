import React, { FC, useContext } from 'react'

import StockRoomChangesContext from '../../../../contexts/StockRoomChangesContext/StockRoomChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useStockRoomChangesTable from './hooks/useStockRoomChangesTable'

const StockRoomChangesTable: FC = () => {
    const state = useContext(StockRoomChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockRoomChangesTable()

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

export default StockRoomChangesTable
