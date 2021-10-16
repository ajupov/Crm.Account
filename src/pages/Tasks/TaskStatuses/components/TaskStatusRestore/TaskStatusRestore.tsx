import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import TaskStatusesActionsContext from '../../contexts/TaskStatusesActionsContext/TaskStatusesActionsContext'
import useTaskStatusRestore from './hooks/useTaskStatusRestore'

// TODO: Move to l10n
const TaskStatusRestore: FC = () => {
    const state = useContext(TaskStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useTaskStatusRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление статуса"
            content="Вы уверены, что хотите восстановить статус?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default TaskStatusRestore
