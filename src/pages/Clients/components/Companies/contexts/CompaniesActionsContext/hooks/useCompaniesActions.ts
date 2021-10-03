import CompaniesActionsState, { companiesActionsInitialState } from '../../../states/CompaniesActionsState'
import { useCallback, useState } from 'react'

import CompaniesClient from '../../../../../../../../api/companies/clients/CompaniesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'

const companiesClient = new CompaniesClient(HttpClientFactory.Api)

const useCompaniesActions = (): CompaniesActionsState => {
    const [ids, setIds] = useState(companiesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(companiesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(companiesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(companiesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await companiesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await companiesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useCompaniesActions
