import React, { FC, useContext } from 'react'

import SuppliersContext from '../../contexts/SuppliersContext/SuppliersContext'
import SuppliersRoutes from '../../routes/SuppliersRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useSuppliersTable from './hooks/useSuppliersTable'

const SuppliersTable: FC = () => {
    const state = useContext(SuppliersContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useSuppliersTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.suppliers)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={SuppliersRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default SuppliersTable
