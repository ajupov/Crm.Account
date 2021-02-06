import React, { FC, useContext } from 'react'

import DealTypesContext from '../../contexts/DealTypesContext/DealTypesContext'
import DealTypesRoutes from '../../routes/DealTypesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useDealTypesTable from './hooks/useDealTypesTable'

const DealTypesTable: FC = () => {
    const state = useContext(DealTypesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useDealTypesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.types)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={DealTypesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default DealTypesTable
