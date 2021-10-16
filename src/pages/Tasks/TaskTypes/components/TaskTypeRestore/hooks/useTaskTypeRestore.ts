import { useCallback, useContext } from 'react'

import TaskTypesActionsContext from '../../../contexts/TaskTypesActionsContext/TaskTypesActionsContext'
import TaskTypesContext from '../../../contexts/TaskTypesContext/TaskTypesContext'
import TaskTypesRoutes from '../../../routes/TaskTypesRoutes'
import { useHistory } from 'react-router'

interface UseTaskTypeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useTaskTypeRestore = (): UseTaskTypeRestore => {
    const history = useHistory()
    const actionsState = useContext(TaskTypesActionsContext)
    const typesState = useContext(TaskTypesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(TaskTypesRoutes.Index)
        await typesState.getPagedList()
    }, [actionsState, history, typesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useTaskTypeRestore
