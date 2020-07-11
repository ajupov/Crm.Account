import React, { FC, useContext } from 'react'

import CompanyChangesContext from '../../../../contexts/CompanyChangesContext/CompanyChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useCompanyChangesTable from './hooks/useCompanyChangesTable'

const CompanyChangesTable: FC = () => {
    const state = useContext(CompanyChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCompanyChangesTable()

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

export default CompanyChangesTable
