import { useCallback, useContext } from 'react'

import ProductAttributesActionsContext from '../../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContext'
import ProductAttributesContext from '../../../contexts/ProductAttributesContext/ProductAttributesContext'
import { ProductAttributesRoutes } from '../../../routes/ProductAttributesRoutes'
import { useHistory } from 'react-router'

interface UseProductAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductAttributeDelete = (): UseProductAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(ProductAttributesActionsContext)
    const attributesState = useContext(ProductAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(ProductAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductAttributeDelete
