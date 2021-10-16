import React, { FC, useContext } from 'react'

import Table from '../../../../../../../components/common/collections/Table/Table'
import TaskTypeChangesContext from '../../../../contexts/TaskTypeChangesContext/TaskTypeChangesContext'
import useTaskTypeChangesTable from './hooks/useTaskTypeChangesTable'

const TaskTypeChangesTable: FC = () => {
    const state = useContext(TaskTypeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useTaskTypeChangesTable()

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

export default TaskTypeChangesTable
