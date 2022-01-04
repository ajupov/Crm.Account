import React, { FC, useContext } from 'react'

import StockBalancesContext from '../../contexts/StockBalancesContext/StockBalancesContext'
import StockBalancesRoutes from '../../routes/StockBalancesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useStockBalancesTable from './hooks/useStockBalancesTable'

const StockBalancesTable: FC = () => {
    const state = useContext(StockBalancesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockBalancesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.stockBalances)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={StockBalancesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default StockBalancesTable
