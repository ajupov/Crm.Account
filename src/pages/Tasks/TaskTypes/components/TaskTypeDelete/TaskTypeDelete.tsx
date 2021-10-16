import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import TaskTypesActionsContext from '../../contexts/TaskTypesActionsContext/TaskTypesActionsContext'
import useTaskTypeDelete from './hooks/useTaskTypeDelete'

// TODO: Move to l10n
const TaskTypeDelete: FC = () => {
    const state = useContext(TaskTypesActionsContext)
    const { onClickConfirm, onClickCancel } = useTaskTypeDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление типа"
            content="Вы уверены, что хотите удалить тип?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default TaskTypeDelete
