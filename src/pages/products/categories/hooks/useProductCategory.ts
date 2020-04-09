import { ProductCategoryState, productCategoryInitialState } from '../states/ProductCategoryState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategory = (id?: string | undefined): ProductCategoryState => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<ProductCategory>(productCategoryInitialState.category)

    const load = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productCategoriesClient.GetAsync(id)

        setCategory(response)

        setIsLoading(false)
    }, [id])

    const save = useCallback(() => productCategoriesClient.UpdateAsync(category), [category])

    useEffect(() => {
        load()
    }, [load])

    return { isLoading, category, setCategory, save }
}

export default useProductCategory
