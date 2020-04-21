import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseProductCategoryViewReturn {
    onClickCancel: () => void
}

const useProductCategoryChangesView = (): UseProductCategoryViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    return { onClickCancel }
}

export default useProductCategoryChangesView
