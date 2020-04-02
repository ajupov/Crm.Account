import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseCreateActionsReturn {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCreateActions = (): UseCreateActionsReturn => {
    const path = '/products/categories'

    const history = useHistory()

    const onClickConfirm = useCallback(() => global.console.log(), [])

    const onClickCancel = useCallback(() => history.push(path), [history])

    return { onClickConfirm, onClickCancel }
}

export default useCreateActions
