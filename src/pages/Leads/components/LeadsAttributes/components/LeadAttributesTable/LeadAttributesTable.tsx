import React, { FC, useContext } from 'react'

import LeadAttributesContext from '../../contexts/LeadAttributesContext/LeadAttributesContext'
import LeadAttributesRoutes from '../../routes/LeadAttributesRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useLeadAttributesTable from './hooks/useLeadAttributesTable'

const LeadAttributesTable: FC = () => {
    const state = useContext(LeadAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useLeadAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={LeadAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default LeadAttributesTable
