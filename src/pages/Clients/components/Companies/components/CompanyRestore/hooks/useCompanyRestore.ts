import { useCallback, useContext } from 'react'

import CompaniesActionsContext from '../../../contexts/CompaniesActionsContext/CompaniesActionsContext'
import CompaniesContext from '../../../contexts/CompaniesContext/CompaniesContext'
import CompaniesRoutes from '../../../routes/CompaniesRoutes'
import { useHistory } from 'react-router'

interface UseCompanyRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCompanyRestore = (): UseCompanyRestore => {
    const history = useHistory()
    const actionsState = useContext(CompaniesActionsContext)
    const companiesState = useContext(CompaniesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(CompaniesRoutes.Index)
        await companiesState.getPagedList()
    }, [actionsState, history, companiesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCompanyRestore
