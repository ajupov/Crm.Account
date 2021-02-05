import React, { FC, useContext } from 'react'

import LeadSourcesContext from '../../contexts/LeadSourcesContext/LeadSourcesContext'
import LeadSourcesRoutes from '../../routes/LeadSourcesRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useLeadSourcesTable from './hooks/useLeadSourcesTable'

const LeadSourcesTable: FC = () => {
    const state = useContext(LeadSourcesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useLeadSourcesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.sources)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={LeadSourcesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default LeadSourcesTable
