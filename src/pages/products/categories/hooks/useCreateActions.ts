import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseCreateActionsReturn {
    onClickCreate: () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCreateActions = (): UseCreateActionsReturn => {
    const path = '/products/categories'
    const action = '/create'

    const history = useHistory()

    const onClickCreate = useCallback(() => history.push(`${path}${action}`), [history])

    const onClickConfirm = useCallback(() => global.console.log(), [])

    const onClickCancel = useCallback(() => history.push(path), [history])

    return { onClickCreate, onClickConfirm, onClickCancel }
}

export default useCreateActions
