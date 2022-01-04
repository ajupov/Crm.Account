import { useCallback, useContext } from 'react'

import StockBalancesActionsContext from '../../../contexts/StockBalancesActionsContext/StockBalancesActionsContext'
import StockBalancesContext from '../../../contexts/StockBalancesContext/StockBalancesContext'
import StockBalancesRoutes from '../../../routes/StockBalancesRoutes'
import { useHistory } from 'react-router'

interface UseStockBalanceDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockBalanceDelete = (): UseStockBalanceDelete => {
    const history = useHistory()
    const actionsState = useContext(StockBalancesActionsContext)
    const stockBalancesState = useContext(StockBalancesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(StockBalancesRoutes.Index)
        await stockBalancesState.getPagedList()
    }, [actionsState, history, stockBalancesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockBalanceDelete
