import { useCallback, useContext } from 'react'

import CustomerSourcesActionsContext from '../../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContext'
import CustomerSourcesContext from '../../../contexts/CustomerSourcesContext/CustomerSourcesContext'
import CustomerSourcesRoutes from '../../../routes/CustomerSourcesRoutes'
import { useHistory } from 'react-router'

interface UseCustomerSourceRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCustomerSourceRestore = (): UseCustomerSourceRestore => {
    const history = useHistory()
    const actionsState = useContext(CustomerSourcesActionsContext)
    const sourcesState = useContext(CustomerSourcesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(CustomerSourcesRoutes.Index)
        await sourcesState.getPagedList()
    }, [actionsState, history, sourcesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCustomerSourceRestore
