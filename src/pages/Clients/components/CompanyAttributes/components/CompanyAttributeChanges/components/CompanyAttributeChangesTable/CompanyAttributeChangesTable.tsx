import React, { FC, useContext } from 'react'

import CompanyAttributeChangesContext from '../../../../contexts/CompanyAttributeChangesContext/CompanyAttributeChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useCompanyAttributeChangesTable from './hooks/useCompanyAttributeChangesTable'

const CompanyAttributeChangesTable: FC = () => {
    const state = useContext(CompanyAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCompanyAttributeChangesTable()

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

export default CompanyAttributeChangesTable
