import { useCallback, useContext } from 'react'

import SupplierAttributesActionsContext from '../../../contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContext'
import SupplierAttributesContext from '../../../contexts/SupplierAttributesContext/SupplierAttributesContext'
import SupplierAttributesRoutes from '../../../routes/SupplierAttributesRoutes'
import { useHistory } from 'react-router'

interface UseSupplierAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useSupplierAttributeDelete = (): UseSupplierAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(SupplierAttributesActionsContext)
    const attributesState = useContext(SupplierAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(SupplierAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useSupplierAttributeDelete
