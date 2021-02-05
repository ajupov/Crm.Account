import React, { FC, useContext } from 'react'

import LeadChangesContext from '../../../../contexts/LeadChangesContext/LeadChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useLeadChangesTable from './hooks/useLeadChangesTable'

const LeadChangesTable: FC = () => {
    const state = useContext(LeadChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useLeadChangesTable()

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

export default LeadChangesTable
