import { useCallback, useContext } from 'react'

import CompaniesActionsContext from '../../../contexts/CompaniesActionsContext/CompaniesActionsContext'
import CompaniesContext from '../../../contexts/CompaniesContext/CompaniesContext'
import CompaniesRoutes from '../../../routes/CompaniesRoutes'
import { useHistory } from 'react-router'

interface UseCompanyDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCompanyDelete = (): UseCompanyDelete => {
    const history = useHistory()
    const actionsState = useContext(CompaniesActionsContext)
    const companiesState = useContext(CompaniesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(CompaniesRoutes.Index)
        await companiesState.getPagedList()
    }, [actionsState, history, companiesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCompanyDelete
