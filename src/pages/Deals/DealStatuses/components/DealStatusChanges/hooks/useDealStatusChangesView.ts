import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseOrderStatusViewReturn {
    onClickCancel: () => void
}

const useOrderStatusChangesView = (): UseOrderStatusViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useOrderStatusChangesView
