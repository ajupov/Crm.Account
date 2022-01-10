import React, { FC, useContext } from 'react'

import StockConsumptionsContext from '../../contexts/StockConsumptionsContext/StockConsumptionsContext'
import StockConsumptionsRoutes from '../../routes/StockConsumptionsRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useStockConsumptionsTable from './hooks/useStockConsumptionsTable'

const StockConsumptionsTable: FC = () => {
    const state = useContext(StockConsumptionsContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockConsumptionsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.stockConsumptions)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={StockConsumptionsRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default StockConsumptionsTable
