import { useCallback, useContext } from 'react'

import DealAttributesActionsContext from '../../../contexts/DealAttributesActionsContext/DealAttributesActionsContext'
import DealAttributesContext from '../../../contexts/DealAttributesContext/DealAttributesContext'
import DealAttributesRoutes from '../../../routes/DealAttributesRoutes'
import { useHistory } from 'react-router'

interface UseDealAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useDealAttributeRestore = (): UseDealAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(DealAttributesActionsContext)
    const attributesState = useContext(DealAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(DealAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useDealAttributeRestore
