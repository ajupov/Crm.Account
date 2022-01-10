import { useCallback, useContext } from 'react'

import StockConsumptionsActionsContext from '../../../contexts/StockConsumptionsActionsContext/StockConsumptionsActionsContext'
import StockConsumptionsContext from '../../../contexts/StockConsumptionsContext/StockConsumptionsContext'
import StockConsumptionsRoutes from '../../../routes/StockConsumptionsRoutes'
import { useHistory } from 'react-router'

interface UseStockConsumptionDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockConsumptionDelete = (): UseStockConsumptionDelete => {
    const history = useHistory()
    const actionsState = useContext(StockConsumptionsActionsContext)
    const stockConsumptionsState = useContext(StockConsumptionsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(StockConsumptionsRoutes.Index)
        await stockConsumptionsState.getPagedList()
    }, [actionsState, history, stockConsumptionsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockConsumptionDelete
