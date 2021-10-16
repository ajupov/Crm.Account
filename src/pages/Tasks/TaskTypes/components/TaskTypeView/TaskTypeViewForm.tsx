import React, { FC, useContext } from 'react'

import TaskTypeContext from '../../contexts/TaskTypeContext/TaskTypeContext'
import TaskTypesRoutes from '../../routes/TaskTypesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useTaskTypeView from './hooks/useTaskTypeView'
import useTaskTypesActions from '../../contexts/TaskTypesActionsContext/hooks/useTaskTypesActions'

const TaskTypeViewForm: FC = () => {
    const state = useContext(TaskTypeContext)
    const { isLoading } = useTaskTypesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useTaskTypeView()

    return (
        <View
            id={state.type.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.type.isDeleted}
            createDate={state.type.createDateTime}
            lastModifyDateTime={state.type.modifyDateTime}
            data={map(state.type)}
            editLink={TaskTypesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={TaskTypesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default TaskTypeViewForm
