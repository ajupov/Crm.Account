import { useCallback, useContext } from 'react'

import DealStatusesActionsContext from '../../../contexts/DealStatusesActionsContext/DealStatusesActionsContext'
import DealStatusesContext from '../../../contexts/DealStatusesContext/DealStatusesContext'
import DealStatusesRoutes from '../../../routes/DealStatusesRoutes'
import { useHistory } from 'react-router'

interface UseDealStatusRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useDealStatusRestore = (): UseDealStatusRestore => {
    const history = useHistory()
    const actionsState = useContext(DealStatusesActionsContext)
    const statusesState = useContext(DealStatusesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(DealStatusesRoutes.Index)
        await statusesState.getPagedList()
    }, [actionsState, history, statusesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useDealStatusRestore
