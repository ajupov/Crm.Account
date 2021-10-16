import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseTaskTypeViewReturn {
    onClickCancel: () => void
}

const useTaskTypeChangesView = (): UseTaskTypeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useTaskTypeChangesView
