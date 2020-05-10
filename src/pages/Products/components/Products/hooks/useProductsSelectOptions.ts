import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductAttribute from '../../../../../../api/products/models/ProductAttribute'
import ProductAttributesClient from '../../../../../../api/products/clients/ProductAttributesClient'
import ProductCategoriesClient from '../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../api/products/models/ProductCategory'
import ProductStatus from '../../../../../../api/products/models/ProductStatus'
import ProductStatusesClient from '../../../../../../api/products/clients/ProductStatusesClient'
import { SelectOptionCreateFieldProps } from '../../../../../components/Create/Create'

const productStatusesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)
const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)
const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

interface UseProductsSelectOptionsReturn {
    statuses: SelectOptionCreateFieldProps[]
    categories: SelectOptionCreateFieldProps[]
    attributes: SelectOptionCreateFieldProps[]
}

const useProductsSelectOptions = (): UseProductsSelectOptionsReturn => {
    const MaxLimit = 100

    const [statuses, setStatuses] = useState<SelectOptionCreateFieldProps[]>([])
    const [categories, setCategories] = useState<SelectOptionCreateFieldProps[]>([])
    const [attributes, setAttributes] = useState<SelectOptionCreateFieldProps[]>([])

    const mapProductStatus = useCallback((x: ProductStatus) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const mapProductCategory = useCallback((x: ProductCategory) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const mapProductAttribute = useCallback((x: ProductAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const getStatuses = useCallback(async () => {
        const statuses = await productStatusesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setStatuses(statuses.statuses?.map(mapProductStatus) ?? [])
    }, [mapProductStatus])

    const getCategories = useCallback(async () => {
        const statuses = await productCategoriesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setCategories(statuses.categories?.map(mapProductCategory) ?? [])
    }, [mapProductCategory])

    const getAttributes = useCallback(async () => {
        const statuses = await productAttributesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(statuses.attributes?.map(mapProductAttribute) ?? [])
    }, [mapProductAttribute])

    useEffect(() => {
        getStatuses()
        getCategories()
        getAttributes()
    }, [getAttributes, getCategories, getStatuses])

    return { statuses, categories, attributes }
}

export default useProductsSelectOptions
