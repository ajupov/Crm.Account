import { useCallback, useContext } from 'react'

import StockRoomsActionsContext from '../../../contexts/StockRoomsActionsContext/StockRoomsActionsContext'
import StockRoomsContext from '../../../contexts/StockRoomsContext/StockRoomsContext'
import StockRoomsRoutes from '../../../routes/StockRoomsRoutes'
import { useHistory } from 'react-router'

interface UseStockRoomDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockRoomDelete = (): UseStockRoomDelete => {
    const history = useHistory()
    const actionsState = useContext(StockRoomsActionsContext)
    const roomsState = useContext(StockRoomsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(StockRoomsRoutes.Index)
        await roomsState.getPagedList()
    }, [actionsState, history, roomsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockRoomDelete
