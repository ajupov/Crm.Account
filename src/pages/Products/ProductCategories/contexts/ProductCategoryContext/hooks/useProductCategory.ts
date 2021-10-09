import { ProductCategoryState, productCategoryInitialState } from '../../../states/ProductCategoryState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'
import { useParams } from 'react-router'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProductCategory = (): ProductCategoryState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(productCategoryInitialState.isLoading)
    const [category, setCategory] = useState(productCategoryInitialState.category)

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
        void get()
    }, [get])

    return { isLoading, category, setCategory, create, update }
}

export default useProductCategory
