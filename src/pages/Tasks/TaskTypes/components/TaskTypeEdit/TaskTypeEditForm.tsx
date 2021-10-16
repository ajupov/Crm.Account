import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import TaskTypeContext from '../../contexts/TaskTypeContext/TaskTypeContext'
import TaskTypesRoutes from '../../routes/TaskTypesRoutes'
import useTaskTypeOnChange from '../../hooks/change/useTaskTypeOnChange'
import useTaskTypesActions from '../../contexts/TaskTypesActionsContext/hooks/useTaskTypesActions'

const TaskTypeEditForm: FC = () => {
    const state = useContext(TaskTypeContext)
    const { isLoading } = useTaskTypesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useTaskTypeOnChange()

    return state.type.id ? (
        <EditForm
            id={state.type.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.type.createDateTime}
            lastModifyDateTime={state.type.modifyDateTime}
            historyLink={TaskTypesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default TaskTypeEditForm
