import React, { FC, useContext } from 'react'

import CompaniesContext from '../../contexts/CompaniesContext/CompaniesContext'
import Table from '../../../../../../components/common/collections/Table/Table'
import useCompaniesTable from './hooks/useCompaniesTable'

const CompaniesTable: FC = () => {
    const state = useContext(CompaniesContext)
    const { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage } = useCompaniesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.companies)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CompaniesTable
