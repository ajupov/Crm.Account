import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseContactAttributeViewReturn {
    onClickCancel: () => void
}

const useContactAttributeChangesView = (): UseContactAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useContactAttributeChangesView
