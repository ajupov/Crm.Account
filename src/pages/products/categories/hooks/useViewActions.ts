import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseViewActionsReturn {
    onClickBack: () => void
}

const useViewActions = (): UseViewActionsReturn => {
    const path = '/products/categories'

    const history = useHistory()

    const onClickBack = useCallback(() => history.push(path), [history])

    return { onClickBack }
}

export default useViewActions
