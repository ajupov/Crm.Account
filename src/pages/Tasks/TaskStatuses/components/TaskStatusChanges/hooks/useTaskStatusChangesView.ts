import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseTaskStatusViewReturn {
    onClickCancel: () => void
}

const useTaskStatusChangesView = (): UseTaskStatusViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useTaskStatusChangesView
