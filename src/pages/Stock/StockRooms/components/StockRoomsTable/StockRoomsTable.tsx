import React, { FC, useContext } from 'react'

import StockRoomsContext from '../../contexts/StockRoomsContext/StockRoomsContext'
import StockRoomsRoutes from '../../routes/StockRoomsRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useStockRoomsTable from './hooks/useStockRoomsTable'

const StockRoomsTable: FC = () => {
    const state = useContext(StockRoomsContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockRoomsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.rooms)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={StockRoomsRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default StockRoomsTable
