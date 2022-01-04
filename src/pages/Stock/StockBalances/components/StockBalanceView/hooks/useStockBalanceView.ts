import { useCallback, useContext } from 'react'

import StockBalance from '../../../../../../../api/stock/models/StockBalance'
import StockBalanceContext from '../../../contexts/StockBalanceContext/StockBalanceContext'
import StockBalancesActionsContext from '../../../contexts/StockBalancesActionsContext/StockBalancesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'
import useProductLoad from '../../../hooks/load/useProductLoad'

interface UseStockBalanceViewReturn {
    map: (stockBalance: StockBalance) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockBalanceView = (): UseStockBalanceViewReturn => {
    const history = useHistory()
    const stockBalanceState = useContext(StockBalanceContext)
    const actionsState = useContext(StockBalancesActionsContext)
    const { product } = useProductLoad(stockBalanceState.stockBalance.productId)

    const onClickDelete = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsDeleting(true)
        },
        [actionsState]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsRestoring(true)
        },
        [actionsState]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (stockBalance: StockBalance): ViewDataProps[] => [
            { label: 'Склад', value: stockBalance.room?.name },
            { label: 'Продукт', value: product?.name },
            { label: 'Количество', value: stockBalance.count.toString() },
            { label: 'Удален', value: stockBalance.isDeleted ? 'Да' : 'Нет' }
        ],
        [product]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useStockBalanceView
