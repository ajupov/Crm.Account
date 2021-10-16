import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import TaskAttributesActionsContext from '../../contexts/TaskAttributesActionsContext/TaskAttributesActionsContext'
import useTaskAttributeRestore from './hooks/useTaskAttributeRestore'

// TODO: Move to l10n
const TaskAttributeRestore: FC = () => {
    const state = useContext(TaskAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useTaskAttributeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление атрибута"
            content="Вы уверены, что хотите восстановить атрибут?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default TaskAttributeRestore
