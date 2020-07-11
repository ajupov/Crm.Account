import { useCallback, useContext } from 'react'

import CompanyAttributesActionsContext from '../../../contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContext'
import CompanyAttributesContext from '../../../contexts/CompanyAttributesContext/CompanyAttributesContext'
import CompanyAttributesRoutes from '../../../routes/CompanyAttributesRoutes'
import { useHistory } from 'react-router'

interface UseCompanyAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCompanyAttributeDelete = (): UseCompanyAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(CompanyAttributesActionsContext)
    const attributesState = useContext(CompanyAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(CompanyAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCompanyAttributeDelete
