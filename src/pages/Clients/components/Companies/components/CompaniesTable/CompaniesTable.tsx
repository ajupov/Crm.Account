import React, { FC, useContext } from 'react'

import CompaniesContext from '../../contexts/CompaniesContext/CompaniesContext'
import CompaniesRoutes from '../../routes/CompaniesRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useCompaniesTable from './hooks/useCompaniesTable'

const CompaniesTable: FC = () => {
    const state = useContext(CompaniesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCompaniesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.companies)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={CompaniesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CompaniesTable
