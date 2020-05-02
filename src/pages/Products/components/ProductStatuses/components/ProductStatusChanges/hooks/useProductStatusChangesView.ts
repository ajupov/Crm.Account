import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseProductStatusViewReturn {
    onClickCancel: () => void
}

const useProductStatusChangesView = (): UseProductStatusViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    return { onClickCancel }
}

export default useProductStatusChangesView
