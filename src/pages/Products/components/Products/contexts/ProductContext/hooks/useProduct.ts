import { ProductState, productInitialState } from '../../../states/ProductState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductsClient from '../../../../../../../../api/products/clients/ProductsClient'
import { useParams } from 'react-router'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)

const useProduct = (): ProductState => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(productInitialState.isLoading)
    const [product, setAttribute] = useState(productInitialState.product)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productsClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await productsClient.CreateAsync(product)

        setIsLoading(false)
    }, [product])

    const update = useCallback(async () => {
        setIsLoading(true)

        await productsClient.UpdateAsync(product)

        setIsLoading(false)
    }, [product])

    useEffect(() => {
        get()
    }, [get])

    return { isLoading, product, setProduct: setAttribute, create, update }
}

export default useProduct
