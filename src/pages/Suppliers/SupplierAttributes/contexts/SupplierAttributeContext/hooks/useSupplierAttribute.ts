import { SupplierAttributeState, supplierAttributeInitialState } from '../../../states/SupplierAttributeState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierAttributesClient from '../../../../../../../api/suppliers/clients/SupplierAttributesClient'
import { useParams } from 'react-router'

const supplierAttributesClient = new SupplierAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierAttribute = (): SupplierAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(supplierAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(supplierAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            setAttribute({ ...supplierAttributeInitialState.attribute, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await supplierAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await supplierAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await supplierAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useSupplierAttribute
