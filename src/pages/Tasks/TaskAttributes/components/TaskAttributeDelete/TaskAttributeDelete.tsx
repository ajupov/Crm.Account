import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import TaskAttributesActionsContext from '../../contexts/TaskAttributesActionsContext/TaskAttributesActionsContext'
import useTaskAttributeDelete from './hooks/useTaskAttributeDelete'

// TODO: Move to l10n
const TaskAttributeDelete: FC = () => {
    const state = useContext(TaskAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useTaskAttributeDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление атрибута"
            content="Вы уверены, что хотите удалить атрибут?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default TaskAttributeDelete
