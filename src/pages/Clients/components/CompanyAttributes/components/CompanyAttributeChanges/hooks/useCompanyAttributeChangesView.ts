import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseCompanyAttributeViewReturn {
    onClickCancel: () => void
}

const useCompanyAttributeChangesView = (): UseCompanyAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useCompanyAttributeChangesView
