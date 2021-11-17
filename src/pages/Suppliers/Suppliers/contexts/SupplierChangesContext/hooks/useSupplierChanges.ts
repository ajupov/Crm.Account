import SupplierChangesState, { supplierChangesInitialState } from '../../../states/SupplierChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierChangesClient from '../../../../../../../api/suppliers/clients/SupplierChangesClient'
import { useParams } from 'react-router'

const supplierChangesClient = new SupplierChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierChanges = (): SupplierChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(supplierChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(supplierChangesInitialState.isLoading)
    const [changes, setChanges] = useState(supplierChangesInitialState.changes)
    const [total, setTotal] = useState(supplierChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await supplierChangesClient.GetPagedListAsync({ ...request, supplierId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await supplierChangesClient.GetPagedListAsync({
            ...request,
            supplierId: id,
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

export default useSupplierChanges
