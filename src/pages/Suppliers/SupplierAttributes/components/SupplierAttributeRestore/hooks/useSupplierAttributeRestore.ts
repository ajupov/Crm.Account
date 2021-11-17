import { useCallback, useContext } from 'react'

import SupplierAttributesActionsContext from '../../../contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContext'
import SupplierAttributesContext from '../../../contexts/SupplierAttributesContext/SupplierAttributesContext'
import SupplierAttributesRoutes from '../../../routes/SupplierAttributesRoutes'
import { useHistory } from 'react-router'

interface UseSupplierAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useSupplierAttributeRestore = (): UseSupplierAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(SupplierAttributesActionsContext)
    const attributesState = useContext(SupplierAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(SupplierAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useSupplierAttributeRestore
