import { useCallback, useContext } from 'react'

import ProductStatusesActionsContext from '../../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import ProductStatusesContext from '../../../contexts/ProductStatusesContext/ProductStatusesContext'
import { ProductStatusesRoutes } from '../../../routes/ProductStatusesRoutes'
import { useHistory } from 'react-router'

interface UseProductStatusDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductStatusDelete = (): UseProductStatusDelete => {
    const history = useHistory()
    const actionsState = useContext(ProductStatusesActionsContext)
    const statusesState = useContext(ProductStatusesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(ProductStatusesRoutes.Index)
        await statusesState.getPagedList()
    }, [actionsState, history, statusesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductStatusDelete
