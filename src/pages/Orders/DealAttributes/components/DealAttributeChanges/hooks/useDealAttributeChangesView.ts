import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseOrderAttributeViewReturn {
    onClickCancel: () => void
}

const useOrderAttributeChangesView = (): UseOrderAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useOrderAttributeChangesView
