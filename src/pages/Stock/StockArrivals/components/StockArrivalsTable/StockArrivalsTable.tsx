import React, { FC, useContext } from 'react'

import StockArrivalsContext from '../../contexts/StockArrivalsContext/StockArrivalsContext'
import StockArrivalsRoutes from '../../routes/StockArrivalsRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useStockArrivalsTable from './hooks/useStockArrivalsTable'

const StockArrivalsTable: FC = () => {
    const state = useContext(StockArrivalsContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockArrivalsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.stockArrivals)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={StockArrivalsRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default StockArrivalsTable
