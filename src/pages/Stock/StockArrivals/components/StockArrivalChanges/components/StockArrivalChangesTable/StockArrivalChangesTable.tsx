import React, { FC, useContext } from 'react'

import StockArrivalChangesContext from '../../../../contexts/StockArrivalChangesContext/StockArrivalChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useStockArrivalChangesTable from './hooks/useStockArrivalChangesTable'

const StockArrivalChangesTable: FC = () => {
    const state = useContext(StockArrivalChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useStockArrivalChangesTable()

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

export default StockArrivalChangesTable
