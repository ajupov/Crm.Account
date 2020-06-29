import { useCallback, useContext } from 'react'

import { ContactsRoutes } from '../../../routes/ContactsRoutes'
import ProductsActionsContext from '../../../contexts/ProductsActionsContext/ProductsActionsContext'
import ProductsContext from '../../../contexts/ProductsContext/ProductsContext'
import { useHistory } from 'react-router'

interface UseProductDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductDelete = (): UseProductDelete => {
    const history = useHistory()
    const actionsState = useContext(ProductsActionsContext)
    const productsState = useContext(ProductsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(ContactsRoutes.Index)
        await productsState.getPagedList()
    }, [actionsState, history, productsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductDelete
