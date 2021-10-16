import React, { FC, useContext } from 'react'

import Table from '../../../../../../../components/common/collections/Table/Table'
import TaskAttributeChangesContext from '../../../../contexts/TaskAttributeChangesContext/TaskAttributeChangesContext'
import useTaskAttributeChangesTable from './hooks/useTaskAttributeChangesTable'

const TaskAttributeChangesTable: FC = () => {
    const state = useContext(TaskAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useTaskAttributeChangesTable()

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

export default TaskAttributeChangesTable
