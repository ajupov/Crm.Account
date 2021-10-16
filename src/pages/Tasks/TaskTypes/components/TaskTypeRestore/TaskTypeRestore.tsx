import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import TaskTypesActionsContext from '../../contexts/TaskTypesActionsContext/TaskTypesActionsContext'
import useTaskTypeRestore from './hooks/useTaskTypeRestore'

// TODO: Move to l10n
const TaskTypeRestore: FC = () => {
    const state = useContext(TaskTypesActionsContext)
    const { onClickConfirm, onClickCancel } = useTaskTypeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление типа"
            content="Вы уверены, что хотите восстановить тип?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default TaskTypeRestore
