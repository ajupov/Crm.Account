import { ProductCategoryState, productCategoryInitialState } from '../../../states/ProductCategoryState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../../../api/products/models/ProductCategory'
import { useParams } from 'react-router'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategory = (): ProductCategoryState => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<ProductCategory>(productCategoryInitialState.category)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productCategoriesClient.GetAsync(id)

        setCategory(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await productCategoriesClient.CreateAsync(category)

        setIsLoading(false)
    }, [category])

    const update = useCallback(async () => {
        setIsLoading(true)

        await productCategoriesClient.UpdateAsync(category)

        setIsLoading(false)
    }, [category])

    useEffect(() => {
        get()
    }, [get])

    return { isLoading, category, setCategory, create, update }
}

export default useProductCategory
