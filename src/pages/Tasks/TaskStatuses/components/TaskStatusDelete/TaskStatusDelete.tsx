import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import TaskStatusesActionsContext from '../../contexts/TaskStatusesActionsContext/TaskStatusesActionsContext'
import useTaskStatusDelete from './hooks/useTaskStatusDelete'

// TODO: Move to l10n
const TaskStatusDelete: FC = () => {
    const state = useContext(TaskStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useTaskStatusDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление статуса"
            content="Вы уверены, что хотите удалить статус?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default TaskStatusDelete
