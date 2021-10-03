import CustomerAttributeChangesState, {
    customerAttributeChangesInitialState
} from '../../../states/CustomerAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import CustomerAttributeChangesClient from '../../../../../../../../api/customers/clients/CustomerAttributeChangesClient'
import { useParams } from 'react-router'

const customerAttributeChangesClient = new CustomerAttributeChangesClient(HttpClientFactory.Api)

const useCustomerAttributeChanges = (): CustomerAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(customerAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(customerAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(customerAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(customerAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerAttributeChangesClient.GetPagedListAsync({
            ...request,
            attributeId: id,
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

export default useCustomerAttributeChanges
