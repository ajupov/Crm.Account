import { useCallback, useContext } from 'react'

import StockBalancesActionsContext from '../../../contexts/StockBalancesActionsContext/StockBalancesActionsContext'
import StockBalancesContext from '../../../contexts/StockBalancesContext/StockBalancesContext'
import StockBalancesRoutes from '../../../routes/StockBalancesRoutes'
import { useHistory } from 'react-router'

interface UseStockBalanceRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockBalanceRestore = (): UseStockBalanceRestore => {
    const history = useHistory()
    const actionsState = useContext(StockBalancesActionsContext)
    const stockBalancesState = useContext(StockBalancesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(StockBalancesRoutes.Index)
        await stockBalancesState.getPagedList()
    }, [actionsState, history, stockBalancesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockBalanceRestore
