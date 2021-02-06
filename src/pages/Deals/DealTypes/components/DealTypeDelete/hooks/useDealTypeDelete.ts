import { useCallback, useContext } from 'react'

import DealTypesActionsContext from '../../../contexts/DealTypesActionsContext/DealTypesActionsContext'
import DealTypesContext from '../../../contexts/DealTypesContext/DealTypesContext'
import DealTypesRoutes from '../../../routes/DealTypesRoutes'
import { useHistory } from 'react-router'

interface UseDealTypeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useDealTypeDelete = (): UseDealTypeDelete => {
    const history = useHistory()
    const actionsState = useContext(DealTypesActionsContext)
    const typesState = useContext(DealTypesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(DealTypesRoutes.Index)
        await typesState.getPagedList()
    }, [actionsState, history, typesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useDealTypeDelete
