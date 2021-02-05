import React, { FC, useContext } from 'react'

import LeadsContext from '../../contexts/LeadsContext/LeadsContext'
import LeadsRoutes from '../../routes/LeadsRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useLeadsTable from './hooks/useLeadsTable'

const LeadsTable: FC = () => {
    const state = useContext(LeadsContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useLeadsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.leads)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={LeadsRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default LeadsTable
