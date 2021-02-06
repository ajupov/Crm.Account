import React, { FC, useContext } from 'react'

import DealAttributeChangesContext from '../../../../contexts/DealAttributeChangesContext/DealAttributeChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useDealAttributeChangesTable from './hooks/useDealAttributeChangesTable'

const DealAttributeChangesTable: FC = () => {
    const state = useContext(DealAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useDealAttributeChangesTable()

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

export default DealAttributeChangesTable
