import React, { FC, useContext } from 'react'

import Table from '../../../../../../../components/common/collections/Table/Table'
import TaskStatusChangesContext from '../../../../contexts/TaskStatusChangesContext/TaskStatusChangesContext'
import useTaskStatusChangesTable from './hooks/useTaskStatusChangesTable'

const TaskStatusChangesTable: FC = () => {
    const state = useContext(TaskStatusChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useTaskStatusChangesTable()

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

export default TaskStatusChangesTable
