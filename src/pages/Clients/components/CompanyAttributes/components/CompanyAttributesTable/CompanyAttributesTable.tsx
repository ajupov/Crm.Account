import React, { FC, useContext } from 'react'

import CompanyAttributesContext from '../../contexts/CompanyAttributesContext/CompanyAttributesContext'
import Table from '../../../../../../components/common/collections/Table/Table'
import useCompanyAttributesTable from './hooks/useCompanyAttributesTable'

const CompanyAttributesTable: FC = () => {
    const state = useContext(CompanyAttributesContext)
    const { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage } = useCompanyAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CompanyAttributesTable
