import CustomerChangesState, { customerChangesInitialState } from '../../../states/CustomerChangesState'
import { useCallback, useEffect, useState } from 'react'

import CustomerChangesClient from '../../../../../../../api/customers/clients/CustomerChangesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const customerChangesClient = new CustomerChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerChanges = (): CustomerChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(customerChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(customerChangesInitialState.isLoading)
    const [changes, setChanges] = useState(customerChangesInitialState.changes)
    const [total, setTotal] = useState(customerChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerChangesClient.GetPagedListAsync({ ...request, customerId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerChangesClient.GetPagedListAsync({
            ...request,
            customerId: id,
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

export default useCustomerChanges
