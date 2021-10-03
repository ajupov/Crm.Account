import CustomerSourceChangesState, {
    customerSourceChangesInitialState
} from '../../../states/CustomerSourceChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import CustomerSourcesChangesClient from '../../../../../../../../api/customers/clients/CustomerSourcesChangesClient'
import { useParams } from 'react-router'

const customerSourcesChangesClient = new CustomerSourcesChangesClient(HttpClientFactory.Api)

const useCustomerSourceChanges = (): CustomerSourceChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(customerSourceChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(customerSourceChangesInitialState.isLoading)
    const [changes, setChanges] = useState(customerSourceChangesInitialState.changes)
    const [total, setTotal] = useState(customerSourceChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerSourcesChangesClient.GetPagedListAsync({ ...request, sourceId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerSourcesChangesClient.GetPagedListAsync({
            ...request,
            sourceId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useCustomerSourceChanges
