import { ProductCategoryState, productCategoryInitialState } from '../states/ProductCategoryState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../api/products/models/ProductCategory'
import { useParams } from 'react-router'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategory = (): ProductCategoryState => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<ProductCategory>(productCategoryInitialState.category)
    const [ids, setIds] = useState<string[]>([])
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [isRestoring, setIsRestoring] = useState<boolean>(false)

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

    const _delete = useCallback(async () => {
        setIsDeleting(true)

        await productCategoriesClient.DeleteAsync(ids)

        setIsDeleting(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsRestoring(true)

        await productCategoriesClient.RestoreAsync(ids)

        setIsRestoring(false)
    }, [ids])

    useEffect(() => {
        get()
    }, [get])

    return {
        isLoading,
        category,
        setCategory,
        setIds,
        isDeleting,
        setIsDeleting,
        isRestoring,
        setIsRestoring,
        create,
        update,
        delete: _delete,
        restore
    }
}

export default useProductCategory
