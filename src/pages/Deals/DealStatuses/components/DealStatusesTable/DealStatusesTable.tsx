import React, { FC, useContext } from 'react'

import DealStatusesContext from '../../contexts/DealStatusesContext/DealStatusesContext'
import DealStatusesRoutes from '../../routes/DealStatusesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useDealStatusesTable from './hooks/useDealStatusesTable'

const DealStatusesTable: FC = () => {
    const state = useContext(DealStatusesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useDealStatusesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.statuses)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={DealStatusesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default DealStatusesTable
