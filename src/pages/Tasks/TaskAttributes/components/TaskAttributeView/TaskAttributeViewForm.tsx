import React, { FC, useContext } from 'react'

import TaskAttributeContext from '../../contexts/TaskAttributeContext/TaskAttributeContext'
import TaskAttributesRoutes from '../../routes/TaskAttributesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useTaskAttributeView from './hooks/useTaskAttributeView'
import useTaskAttributesActions from '../../contexts/TaskAttributesActionsContext/hooks/useTaskAttributesActions'

const TaskAttributeViewForm: FC = () => {
    const state = useContext(TaskAttributeContext)
    const { isLoading } = useTaskAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useTaskAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={TaskAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={TaskAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default TaskAttributeViewForm
