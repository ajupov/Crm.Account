import { useCallback, useContext } from 'react'

import StockArrivalsActionsContext from '../../../contexts/StockArrivalsActionsContext/StockArrivalsActionsContext'
import StockArrivalsContext from '../../../contexts/StockArrivalsContext/StockArrivalsContext'
import StockArrivalsRoutes from '../../../routes/StockArrivalsRoutes'
import { useHistory } from 'react-router'

interface UseStockArrivalRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockArrivalRestore = (): UseStockArrivalRestore => {
    const history = useHistory()
    const actionsState = useContext(StockArrivalsActionsContext)
    const stockArrivalsState = useContext(StockArrivalsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(StockArrivalsRoutes.Index)
        await stockArrivalsState.getPagedList()
    }, [actionsState, history, stockArrivalsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockArrivalRestore
