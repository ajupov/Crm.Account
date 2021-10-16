import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseTaskAttributeViewReturn {
    onClickCancel: () => void
}

const useTaskAttributeChangesView = (): UseTaskAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useTaskAttributeChangesView
