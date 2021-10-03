import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseCustomerSourceViewReturn {
    onClickCancel: () => void
}

const useCustomerSourceChangesView = (): UseCustomerSourceViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useCustomerSourceChangesView
