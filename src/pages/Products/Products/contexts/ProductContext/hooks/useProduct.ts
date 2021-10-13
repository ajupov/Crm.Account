import { ProductState, productInitialState } from '../../../states/ProductState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductAttributesClient from '../../../../../../../api/products/clients/ProductAttributesClient'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductsClient from '../../../../../../../api/products/clients/ProductsClient'
import { productAttributesInitialState } from '../../../../ProductAttributes/states/ProductAttributesState'
import { productCategoriesInitialState } from '../../../../ProductCategories/states/ProductCategoriesState'
import { useParams } from 'react-router'

const productsClient = new ProductsClient(HttpClientFactory.Host, HttpClientFactory.Api)
const productCategoriesClient = new ProductCategoriesClient(HttpClientFactory.Host, HttpClientFactory.Api)
const productAttributesClient = new ProductAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProduct = (): ProductState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(productInitialState.isLoading)
    const [product, setProduct] = useState(productInitialState.product)
    const [categories, setCategories] = useState(productCategoriesInitialState.categories)
    const [attributes, setAttributes] = useState(productAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            setProduct({ ...productInitialState.product, id: Guid.create().toString() })
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

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.productAttributeId).filter(x => x) as string[]

            const attributes = await productAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
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
        void get()
    }, [get])

    return { isLoading, product, setProduct, categories, attributes, create, update }
}

export default useProduct
