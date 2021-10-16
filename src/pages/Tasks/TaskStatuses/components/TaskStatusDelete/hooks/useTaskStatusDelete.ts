import { useCallback, useContext } from 'react'

import TaskStatusesActionsContext from '../../../contexts/TaskStatusesActionsContext/TaskStatusesActionsContext'
import TaskStatusesContext from '../../../contexts/TaskStatusesContext/TaskStatusesContext'
import TaskStatusesRoutes from '../../../routes/TaskStatusesRoutes'
import { useHistory } from 'react-router'

interface UseTaskStatusDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useTaskStatusDelete = (): UseTaskStatusDelete => {
    const history = useHistory()
    const actionsState = useContext(TaskStatusesActionsContext)
    const statusesState = useContext(TaskStatusesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(TaskStatusesRoutes.Index)
        await statusesState.getPagedList()
    }, [actionsState, history, statusesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useTaskStatusDelete
