import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseLeadSourceViewReturn {
    onClickCancel: () => void
}

const useLeadSourceChangesView = (): UseLeadSourceViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useLeadSourceChangesView
