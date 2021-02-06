import React, { FC, useContext } from 'react'

import DealTypeChangesContext from '../../../../contexts/DealTypeChangesContext/DealTypeChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useDealTypeChangesTable from './hooks/useDealTypeChangesTable'

const DealTypeChangesTable: FC = () => {
    const state = useContext(DealTypeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useDealTypeChangesTable()

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

export default DealTypeChangesTable
