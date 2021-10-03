import CompanyAttributesActionsState, {
    companyAttributesActionsInitialState
} from '../../../states/CompanyAttributesActionsState'
import { useCallback, useState } from 'react'

import CompanyAttributesClient from '../../../../../../../../api/companies/clients/CompanyAttributesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'

const companyAttributesClient = new CompanyAttributesClient(HttpClientFactory.Api)

const useCompanyAttributesActions = (): CompanyAttributesActionsState => {
    const [ids, setIds] = useState(companyAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(companyAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(companyAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(companyAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await companyAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await companyAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useCompanyAttributesActions
