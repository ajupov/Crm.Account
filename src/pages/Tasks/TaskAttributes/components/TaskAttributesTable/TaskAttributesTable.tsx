import React, { FC, useContext } from 'react'

import Table from '../../../../../components/common/collections/Table/Table'
import TaskAttributesContext from '../../contexts/TaskAttributesContext/TaskAttributesContext'
import TaskAttributesRoutes from '../../routes/TaskAttributesRoutes'
import useTaskAttributesTable from './hooks/useTaskAttributesTable'

const TaskAttributesTable: FC = () => {
    const state = useContext(TaskAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useTaskAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={TaskAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default TaskAttributesTable
