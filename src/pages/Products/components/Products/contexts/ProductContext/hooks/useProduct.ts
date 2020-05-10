import { ProductState, productInitialState } from '../../../states/ProductState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductsClient from '../../../../../../../../api/products/clients/ProductsClient'
import { productCategoriesInitialState } from '../../../../ProductCategories/states/ProductCategoriesState'
import { useParams } from 'react-router'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)
const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProduct = (): ProductState => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(productInitialState.isLoading)
    const [product, setProduct] = useState(productInitialState.product)
    const [categories, setCategories] = useState(productCategoriesInitialState.categories)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productsClient.GetAsync(id)

        setProduct(response)

        if (response.categoryLinks && response.categoryLinks.length > 0) {
            const ids = response.categoryLinks.map(x => x.productCategoryId).filter(x => x) as string[]

            const categories = await productCategoriesClient.GetListAsync(ids)

            setCategories(categories)
        }

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

    return { isLoading, product, setProduct, categories, create, update }
}

export default useProduct
