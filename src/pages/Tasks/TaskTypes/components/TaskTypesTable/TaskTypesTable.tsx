import React, { FC, useContext } from 'react'

import Table from '../../../../../components/common/collections/Table/Table'
import TaskTypesContext from '../../contexts/TaskTypesContext/TaskTypesContext'
import TaskTypesRoutes from '../../routes/TaskTypesRoutes'
import useTaskTypesTable from './hooks/useTaskTypesTable'

const TaskTypesTable: FC = () => {
    const state = useContext(TaskTypesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useTaskTypesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.types)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={TaskTypesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default TaskTypesTable
