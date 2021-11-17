import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseProductViewReturn {
    onClickCancel: () => void
}

const useSupplierChangesView = (): UseProductViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useSupplierChangesView
