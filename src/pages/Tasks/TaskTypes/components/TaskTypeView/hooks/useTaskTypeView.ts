import { useCallback, useContext } from 'react'

import TaskType from '../../../../../../../api/tasks/models/TaskType'
import TaskTypesActionsContext from '../../../contexts/TaskTypesActionsContext/TaskTypesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseTaskTypeViewReturn {
    map: (type: TaskType) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useTaskTypeView = (): UseTaskTypeViewReturn => {
    const history = useHistory()
    const state = useContext(TaskTypesActionsContext)

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
        (type: TaskType): ViewDataProps[] => [
            { label: 'Наименование', value: type.name },
            { label: 'Удален', value: type.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useTaskTypeView
