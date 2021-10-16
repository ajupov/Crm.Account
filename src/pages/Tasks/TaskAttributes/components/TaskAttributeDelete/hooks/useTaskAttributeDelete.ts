import { useCallback, useContext } from 'react'

import TaskAttributesActionsContext from '../../../contexts/TaskAttributesActionsContext/TaskAttributesActionsContext'
import TaskAttributesContext from '../../../contexts/TaskAttributesContext/TaskAttributesContext'
import TaskAttributesRoutes from '../../../routes/TaskAttributesRoutes'
import { useHistory } from 'react-router'

interface UseTaskAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useTaskAttributeDelete = (): UseTaskAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(TaskAttributesActionsContext)
    const attributesState = useContext(TaskAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(TaskAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useTaskAttributeDelete
