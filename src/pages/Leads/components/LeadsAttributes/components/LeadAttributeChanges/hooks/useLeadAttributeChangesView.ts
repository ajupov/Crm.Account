import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseLeadAttributeViewReturn {
    onClickCancel: () => void
}

const useLeadAttributeChangesView = (): UseLeadAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useLeadAttributeChangesView
