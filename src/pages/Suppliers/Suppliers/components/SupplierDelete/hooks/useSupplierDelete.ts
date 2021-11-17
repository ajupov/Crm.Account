import { useCallback, useContext } from 'react'

import SuppliersActionsContext from '../../../contexts/SuppliersActionsContext/SuppliersActionsContext'
import SuppliersContext from '../../../contexts/SuppliersContext/SuppliersContext'
import SuppliersRoutes from '../../../routes/SuppliersRoutes'
import { useHistory } from 'react-router'

interface UseSupplierDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useSupplierDelete = (): UseSupplierDelete => {
    const history = useHistory()
    const actionsState = useContext(SuppliersActionsContext)
    const suppliersState = useContext(SuppliersContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(SuppliersRoutes.Index)
        await suppliersState.getPagedList()
    }, [actionsState, history, suppliersState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useSupplierDelete
