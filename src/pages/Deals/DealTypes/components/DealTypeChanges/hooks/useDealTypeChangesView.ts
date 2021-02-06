import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseDealTypeViewReturn {
    onClickCancel: () => void
}

const useDealTypeChangesView = (): UseDealTypeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useDealTypeChangesView
