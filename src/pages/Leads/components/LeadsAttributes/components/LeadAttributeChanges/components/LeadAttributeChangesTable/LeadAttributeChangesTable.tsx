import React, { FC, useContext } from 'react'

import LeadAttributeChangesContext from '../../../../contexts/LeadAttributeChangesContext/LeadAttributeChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useLeadAttributeChangesTable from './hooks/useLeadAttributeChangesTable'

const LeadAttributeChangesTable: FC = () => {
    const state = useContext(LeadAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useLeadAttributeChangesTable()

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

export default LeadAttributeChangesTable
