import React, { FC, useContext } from 'react'

import TaskStatusContext from '../../contexts/TaskStatusContext/TaskStatusContext'
import TaskStatusesRoutes from '../../routes/TaskStatusesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useTaskStatusView from './hooks/useTaskStatusView'
import useTaskStatusesActions from '../../contexts/TaskStatusesActionsContext/hooks/useTaskStatusesActions'

const TaskStatusViewForm: FC = () => {
    const state = useContext(TaskStatusContext)
    const { isLoading } = useTaskStatusesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useTaskStatusView()

    return (
        <View
            id={state.status.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.status.isDeleted}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            data={map(state.status)}
            editLink={TaskStatusesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={TaskStatusesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default TaskStatusViewForm
