import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseEditActionsReturn {
    onClickEdit: (id: string) => () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useEditActions = (): UseEditActionsReturn => {
    const path = '/products/categories'
    const action = '/edit'

    const history = useHistory()

    const onClickEdit = useCallback((id: string) => () => history.push(`${path}${action}/${id}`), [history])

    const onClickConfirm = useCallback((): void => global.console.log(), [])

    const onClickCancel = useCallback((): void => history.push(path), [history])

    return { onClickEdit, onClickConfirm, onClickCancel }
}

export default useEditActions
