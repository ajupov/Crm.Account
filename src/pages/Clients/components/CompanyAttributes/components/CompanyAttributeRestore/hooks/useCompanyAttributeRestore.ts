import { useCallback, useContext } from 'react'

import CompanyAttributesActionsContext from '../../../contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContext'
import CompanyAttributesContext from '../../../contexts/CompanyAttributesContext/CompanyAttributesContext'
import CompanyAttributesRoutes from '../../../routes/CompanyAttributesRoutes'
import { useHistory } from 'react-router'

interface UseCompanyAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCompanyAttributeRestore = (): UseCompanyAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(CompanyAttributesActionsContext)
    const attributesState = useContext(CompanyAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(CompanyAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCompanyAttributeRestore
