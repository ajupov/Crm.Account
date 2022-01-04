import { useCallback, useContext } from 'react'

import StockRoomsActionsContext from '../../../contexts/StockRoomsActionsContext/StockRoomsActionsContext'
import StockRoomsContext from '../../../contexts/StockRoomsContext/StockRoomsContext'
import StockRoomsRoutes from '../../../routes/StockRoomsRoutes'
import { useHistory } from 'react-router'

interface UseStockRoomRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useStockRoomRestore = (): UseStockRoomRestore => {
    const history = useHistory()
    const actionsState = useContext(StockRoomsActionsContext)
    const roomsState = useContext(StockRoomsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(StockRoomsRoutes.Index)
        await roomsState.getPagedList()
    }, [actionsState, history, roomsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useStockRoomRestore
