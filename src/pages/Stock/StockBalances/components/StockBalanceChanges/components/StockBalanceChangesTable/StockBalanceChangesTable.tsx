import React, { FC, useContext } from 'react'

import StockBalanceChangesContext from '../../../../contexts/StockBalanceChangesContext/StockBalanceChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useStockBalanceChangesTable from './hooks/useStockBalanceChangesTable'

const StockBalanceChangesTable: FC = () => {
    const state = useContext(StockBalanceChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockBalanceChangesTable()

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

export default StockBalanceChangesTable
