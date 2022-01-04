import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseStockRoomViewReturn {
    onClickCancel: () => void
}

const useStockRoomChangesView = (): UseStockRoomViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useStockRoomChangesView
