import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseCustomerAttributeViewReturn {
    onClickCancel: () => void
}

const useCustomerAttributeChangesView = (): UseCustomerAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useCustomerAttributeChangesView
