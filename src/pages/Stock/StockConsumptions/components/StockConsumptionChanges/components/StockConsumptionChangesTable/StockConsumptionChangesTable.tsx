import React, { FC, useContext } from 'react'

import StockConsumptionChangesContext from '../../../../contexts/StockConsumptionChangesContext/StockConsumptionChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useStockConsumptionChangesTable from './hooks/useStockConsumptionChangesTable'

const StockConsumptionChangesTable: FC = () => {
    const state = useContext(StockConsumptionChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockConsumptionChangesTable()

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

export default StockConsumptionChangesTable
