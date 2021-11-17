import SupplierAttributeChangesState, {
    supplierAttributeChangesInitialState
} from '../../../states/SupplierAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierAttributeChangesClient from '../../../../../../../api/suppliers/clients/SupplierAttributeChangesClient'
import { useParams } from 'react-router'

const supplierAttributeChangesClient = new SupplierAttributeChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierAttributeChanges = (): SupplierAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(supplierAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(supplierAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(supplierAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(supplierAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await supplierAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await supplierAttributeChangesClient.GetPagedListAsync({
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

export default useSupplierAttributeChanges
