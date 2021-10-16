import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import TaskAttributeContext from '../../contexts/TaskAttributeContext/TaskAttributeContext'
import TaskAttributesRoutes from '../../routes/TaskAttributesRoutes'
import useTaskAttributeOnChange from '../../hooks/change/useTaskAttributeOnChange'
import useTaskAttributesActions from '../../contexts/TaskAttributesActionsContext/hooks/useTaskAttributesActions'

const TaskAttributeEditForm: FC = () => {
    const state = useContext(TaskAttributeContext)
    const { isLoading } = useTaskAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useTaskAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={TaskAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default TaskAttributeEditForm
