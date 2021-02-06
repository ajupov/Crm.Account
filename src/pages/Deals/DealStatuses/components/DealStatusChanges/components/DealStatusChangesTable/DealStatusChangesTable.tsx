import React, { FC, useContext } from 'react'

import DealStatusChangesContext from '../../../../contexts/DealStatusChangesContext/DealStatusChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useDealStatusChangesTable from './hooks/useDealStatusChangesTable'

const DealStatusChangesTable: FC = () => {
    const state = useContext(DealStatusChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useDealStatusChangesTable()

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

export default DealStatusChangesTable
