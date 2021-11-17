import { useCallback, useContext } from 'react'

import SuppliersActionsContext from '../../../contexts/SuppliersActionsContext/SuppliersActionsContext'
import SuppliersContext from '../../../contexts/SuppliersContext/SuppliersContext'
import SuppliersRoutes from '../../../routes/SuppliersRoutes'
import { useHistory } from 'react-router'

interface UseSupplierRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useSupplierRestore = (): UseSupplierRestore => {
    const history = useHistory()
    const actionsState = useContext(SuppliersActionsContext)
    const suppliersState = useContext(SuppliersContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(SuppliersRoutes.Index)
        await suppliersState.getPagedList()
    }, [actionsState, history, suppliersState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useSupplierRestore
