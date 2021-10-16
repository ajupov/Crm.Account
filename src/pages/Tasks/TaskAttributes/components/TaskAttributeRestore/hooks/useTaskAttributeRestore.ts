import { useCallback, useContext } from 'react'

import TaskAttributesActionsContext from '../../../contexts/TaskAttributesActionsContext/TaskAttributesActionsContext'
import TaskAttributesContext from '../../../contexts/TaskAttributesContext/TaskAttributesContext'
import TaskAttributesRoutes from '../../../routes/TaskAttributesRoutes'
import { useHistory } from 'react-router'

interface UseTaskAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useTaskAttributeRestore = (): UseTaskAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(TaskAttributesActionsContext)
    const attributesState = useContext(TaskAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(TaskAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useTaskAttributeRestore
