import { ProductAttributeState, productAttributeInitialState } from '../../../states/ProductAttributeState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductAttributesClient from '../../../../../../../api/products/clients/ProductAttributesClient'
import { useParams } from 'react-router'

const productAttributesClient = new ProductAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProductAttribute = (): ProductAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(productAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(productAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            setAttribute({ ...productAttributeInitialState.attribute, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await productAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await productAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await productAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useProductAttribute
