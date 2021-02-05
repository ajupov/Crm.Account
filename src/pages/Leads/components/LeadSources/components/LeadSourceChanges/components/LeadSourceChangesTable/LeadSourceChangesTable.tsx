import React, { FC, useContext } from 'react'

import LeadSourceChangesContext from '../../../../contexts/LeadSourceChangesContext/LeadSourceChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useLeadSourceChangesTable from './hooks/useLeadSourceChangesTable'

const LeadSourceChangesTable: FC = () => {
    const state = useContext(LeadSourceChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useLeadSourceChangesTable()

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

export default LeadSourceChangesTable
