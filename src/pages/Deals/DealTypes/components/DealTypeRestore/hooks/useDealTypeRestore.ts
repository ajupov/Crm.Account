import { useCallback, useContext } from 'react'

import OrderTypesActionsContext from '../../../contexts/OrderTypesActionsContext/OrderTypesActionsContext'
import OrderTypesContext from '../../../contexts/OrderTypesContext/OrderTypesContext'
import OrderTypesRoutes from '../../../routes/OrderTypesRoutes'
import { useHistory } from 'react-router'

interface UseOrderTypeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderTypeRestore = (): UseOrderTypeRestore => {
    const history = useHistory()
    const actionsState = useContext(OrderTypesActionsContext)
    const typesState = useContext(OrderTypesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(OrderTypesRoutes.Index)
        await typesState.getPagedList()
    }, [actionsState, history, typesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderTypeRestore
