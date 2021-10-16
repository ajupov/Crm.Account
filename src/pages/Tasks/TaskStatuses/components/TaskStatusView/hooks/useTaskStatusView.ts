import { useCallback, useContext } from 'react'

import TaskStatus from '../../../../../../../api/tasks/models/TaskStatus'
import TaskStatusesActionsContext from '../../../contexts/TaskStatusesActionsContext/TaskStatusesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseTaskStatusViewReturn {
    map: (status: TaskStatus) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useTaskStatusView = (): UseTaskStatusViewReturn => {
    const history = useHistory()
    const state = useContext(TaskStatusesActionsContext)

    const onClickDelete = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsDeleting(true)
        },
        [state]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsRestoring(true)
        },
        [state]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (status: TaskStatus): ViewDataProps[] => [
            { label: 'Наименование', value: status.name },
            { label: 'Конечный', value: status.isFinish ? 'Да' : 'Нет' },
            { label: 'Удален', value: status.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useTaskStatusView
