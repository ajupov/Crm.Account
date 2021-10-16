import React, { FC, useContext } from 'react'

import Table from '../../../../../components/common/collections/Table/Table'
import TaskStatusesContext from '../../contexts/TaskStatusesContext/TaskStatusesContext'
import TaskStatusesRoutes from '../../routes/TaskStatusesRoutes'
import useTaskStatusesTable from './hooks/useTaskStatusesTable'

const TaskStatusesTable: FC = () => {
    const state = useContext(TaskStatusesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useTaskStatusesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.statuses)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={TaskStatusesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default TaskStatusesTable
