import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseDealAttributeViewReturn {
    onClickCancel: () => void
}

const useDealAttributeChangesView = (): UseDealAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useDealAttributeChangesView
