import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseViewActionsReturn {
    onClickView: (id: string) => () => void
    onClickBack: () => () => void
}

const useViewActions = (): UseViewActionsReturn => {
    const path = '/products/categories'

    const history = useHistory()

    const onClickView = useCallback((id: string) => () => history.push(`${path}/${id}`), [history])

    const onClickBack = useCallback(() => () => history.push(path), [history])

    return { onClickView, onClickBack }
}

export default useViewActions
