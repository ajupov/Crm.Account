import { useCallback, useContext } from 'react'

import OrderAttributesActionsContext from '../../../contexts/OrderAttributesActionsContext/OrderAttributesActionsContext'
import OrderAttributesContext from '../../../contexts/OrderAttributesContext/OrderAttributesContext'
import OrderAttributesRoutes from '../../../routes/OrderAttributesRoutes'
import { useHistory } from 'react-router'

interface UseOrderAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderAttributeRestore = (): UseOrderAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(OrderAttributesActionsContext)
    const attributesState = useContext(OrderAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(OrderAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderAttributeRestore
