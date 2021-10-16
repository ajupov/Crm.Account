import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import TaskStatusContext from '../../contexts/TaskStatusContext/TaskStatusContext'
import TaskStatusesRoutes from '../../routes/TaskStatusesRoutes'
import useTaskStatusOnChange from '../../hooks/change/useTaskStatusOnChange'
import useTaskStatusesActions from '../../contexts/TaskStatusesActionsContext/hooks/useTaskStatusesActions'

const TaskStatusEditForm: FC = () => {
    const state = useContext(TaskStatusContext)
    const { isLoading } = useTaskStatusesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useTaskStatusOnChange()

    return state.status.id ? (
        <EditForm
            id={state.status.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            historyLink={TaskStatusesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default TaskStatusEditForm
