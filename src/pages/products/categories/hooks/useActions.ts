import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseActionsReturn {
    onClickCreate: () => void
    onClickView: (id: string) => void
    onClickEdit: (id: string) => void
    onClickBack: () => void
}

const useActions = (): UseActionsReturn => {
    const history = useHistory()

    const onClickCreate = useCallback(() => history.push('/products/categories/create'), [history])

    const onClickView = useCallback((id: string) => history.push(`/products/categories/view/${id}`), [history])

    const onClickEdit = useCallback((id: string) => history.push(`/products/categories/edit/${id}`), [history])

    const onClickBack = useCallback(() => history.push('/products/categories'), [history])

    return { onClickCreate, onClickView, onClickEdit, onClickBack }
}

export default useActions
