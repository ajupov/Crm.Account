import { useCallback, useContext } from 'react'

import { ContactsRoutes } from '../../../routes/ContactsRoutes'
import ProductsActionsContext from '../../../contexts/ProductsActionsContext/ProductsActionsContext'
import ProductsContext from '../../../contexts/ProductsContext/ProductsContext'
import { useHistory } from 'react-router'

interface UseProductRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductRestore = (): UseProductRestore => {
    const history = useHistory()
    const actionsState = useContext(ProductsActionsContext)
    const productsState = useContext(ProductsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(ContactsRoutes.Index)
        await productsState.getPagedList()
    }, [actionsState, history, productsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductRestore
