import { useCallback, useContext } from 'react'

import OrderStatus from '../../../../../../../api/orders/models/OrderStatus'
import OrderStatusesActionsContext from '../../../contexts/OrderStatusesActionsContext/OrderStatusesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseOrderStatusViewReturn {
    map: (status: OrderStatus) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useOrderStatusView = (): UseOrderStatusViewReturn => {
    const history = useHistory()
    const state = useContext(OrderStatusesActionsContext)

    const onClickDelete = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsDeleting(true)
        },
        [state]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsRestoring(true)
        },
        [state]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (status: OrderStatus): ViewDataProps[] => [
            { label: 'Наименование', value: status.name },
            { label: 'Конечный', value: status.isFinish ? 'Да' : 'Нет' },
            { label: 'Удален', value: status.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useOrderStatusView
