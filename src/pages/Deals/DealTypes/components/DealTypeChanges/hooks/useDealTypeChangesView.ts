import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseOrderTypeViewReturn {
    onClickCancel: () => void
}

const useOrderTypeChangesView = (): UseOrderTypeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useOrderTypeChangesView
