import { useCallback, useContext } from 'react'

import DealAttributesActionsContext from '../../../contexts/DealAttributesActionsContext/DealAttributesActionsContext'
import DealAttributesContext from '../../../contexts/DealAttributesContext/DealAttributesContext'
import DealAttributesRoutes from '../../../routes/DealAttributesRoutes'
import { useHistory } from 'react-router'

interface UseDealAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useDealAttributeDelete = (): UseDealAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(DealAttributesActionsContext)
    const attributesState = useContext(DealAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(DealAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useDealAttributeDelete
