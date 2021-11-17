import { SupplierState, supplierInitialState } from '../../../states/SupplierState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierAttributesClient from '../../../../../../../api/suppliers/clients/SupplierAttributesClient'
import SuppliersClient from '../../../../../../../api/suppliers/clients/SuppliersClient'
import { supplierAttributesInitialState } from '../../../../SupplierAttributes/states/SupplierAttributesState'
import { useParams } from 'react-router'

const suppliersClient = new SuppliersClient(HttpClientFactory.Host, HttpClientFactory.Api)
const supplierAttributesClient = new SupplierAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplier = (): SupplierState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(supplierInitialState.isLoading)
    const [supplier, setSupplier] = useState(supplierInitialState.supplier)
    const [attributes, setAttributes] = useState(supplierAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            setSupplier({ ...supplierInitialState.supplier, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await suppliersClient.GetAsync(id)

        setSupplier(response)

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.supplierAttributeId).filter(x => x) as string[]

            const attributes = await supplierAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
        }

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await suppliersClient.CreateAsync(supplier)

        setIsLoading(false)
    }, [supplier])

    const update = useCallback(async () => {
        setIsLoading(true)

        await suppliersClient.UpdateAsync(supplier)

        setIsLoading(false)
    }, [supplier])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, supplier, setSupplier, attributes, create, update }
}

export default useSupplier
