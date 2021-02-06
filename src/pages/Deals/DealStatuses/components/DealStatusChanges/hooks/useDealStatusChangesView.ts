import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseDealStatusViewReturn {
    onClickCancel: () => void
}

const useDealStatusChangesView = (): UseDealStatusViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useDealStatusChangesView
