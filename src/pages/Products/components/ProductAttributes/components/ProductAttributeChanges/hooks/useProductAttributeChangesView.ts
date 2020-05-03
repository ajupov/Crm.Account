import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseProductAttributeViewReturn {
    onClickCancel: () => void
}

const useProductAttributeChangesView = (): UseProductAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    return { onClickCancel }
}

export default useProductAttributeChangesView
