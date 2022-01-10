import { useCallback, useContext } from 'react'

import StockArrivalsActionsContext from '../../../contexts/StockArrivalsActionsContext/StockArrivalsActionsContext'
import StockArrivalsContext from '../../../contexts/StockArrivalsContext/StockArrivalsContext'
import StockArrivalsRoutes from '../../../routes/StockArrivalsRoutes'
import { useHistory } from 'react-router'

interface UseStockArrivalDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockArrivalDelete = (): UseStockArrivalDelete => {
    const history = useHistory()
    const actionsState = useContext(StockArrivalsActionsContext)
    const stockArrivalsState = useContext(StockArrivalsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(StockArrivalsRoutes.Index)
        await stockArrivalsState.getPagedList()
    }, [actionsState, history, stockArrivalsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockArrivalDelete
