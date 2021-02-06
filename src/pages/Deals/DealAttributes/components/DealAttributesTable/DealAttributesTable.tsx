import React, { FC, useContext } from 'react'

import DealAttributesContext from '../../contexts/DealAttributesContext/DealAttributesContext'
import DealAttributesRoutes from '../../routes/DealAttributesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useDealAttributesTable from './hooks/useDealAttributesTable'

const DealAttributesTable: FC = () => {
    const state = useContext(DealAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useDealAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={DealAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default DealAttributesTable
