import { useCallback } from 'react'
import { useHistory } from 'react-router'

interface UseSupplierAttributeViewReturn {
    onClickCancel: () => void
}

const useSupplierAttributeChangesView = (): UseSupplierAttributeViewReturn => {
    const history = useHistory()

    const onClickCancel = useCallback(() => history.goBack(), [history])

    return { onClickCancel }
}

export default useSupplierAttributeChangesView
