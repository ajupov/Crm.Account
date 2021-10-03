import { useCallback, useContext } from 'react'

import OrderType from '../../../../../../../api/orders/models/OrderType'
import OrderTypesActionsContext from '../../../contexts/OrderTypesActionsContext/OrderTypesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseOrderTypeViewReturn {
    map: (type: OrderType) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useOrderTypeView = (): UseOrderTypeViewReturn => {
    const history = useHistory()
    const state = useContext(OrderTypesActionsContext)

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
        (type: OrderType): ViewDataProps[] => [
            { label: 'Наименование', value: type.name },
            { label: 'Удален', value: type.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useOrderTypeView
