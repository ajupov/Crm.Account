import { useCallback, useContext } from 'react'

import StockRoom from '../../../../../../../api/stock/models/StockRoom'
import StockRoomsActionsContext from '../../../contexts/StockRoomsActionsContext/StockRoomsActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseStockRoomViewReturn {
    map: (room: StockRoom) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockRoomView = (): UseStockRoomViewReturn => {
    const history = useHistory()
    const state = useContext(StockRoomsActionsContext)

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
        (room: StockRoom): ViewDataProps[] => [
            { label: 'Наименование', value: room.name },
            { label: 'Удален', value: room.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useStockRoomView
