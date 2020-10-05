import { useCallback, useEffect, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Product from '../../../../../../api/products/models/Product'
import ProductAttribute from '../../../../../../api/products/models/ProductAttribute'
import ProductAttributesClient from '../../../../../../api/products/clients/ProductAttributesClient'
import ProductCategoriesClient from '../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../api/products/models/ProductCategory'
import ProductStatus from '../../../../../../api/products/models/ProductStatus'
import ProductStatusesClient from '../../../../../../api/products/clients/ProductStatusesClient'
import ProductsClient from '../../../../../../api/products/clients/ProductsClient'

const productClient = new ProductsClient(HttpClientFactoryInstance.Api)
const productStatusesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)
const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)
const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

interface UseProductsSelectOptionsReturn {
    getActualProducts: () => DropdownItemProps[]
    getAllProducts: () => DropdownItemProps[]
    getActualStatuses: () => DropdownItemProps[]
    getAllStatuses: () => DropdownItemProps[]
    getActualCategories: () => DropdownItemProps[]
    getAllCategories: () => DropdownItemProps[]
    getActualAttributes: () => DropdownItemProps[]
    getAllAttributes: () => DropdownItemProps[]
}

// TODO: Move to l10n
const useProductsSelectOptions = (): UseProductsSelectOptionsReturn => {
    const MaxLimit = 1000

    const [products, setProducts] = useState<Product[]>([])
    const [statuses, setStatuses] = useState<ProductStatus[]>([])
    const [categories, setCategories] = useState<ProductCategory[]>([])
    const [attributes, setAttributes] = useState<ProductAttribute[]>([])

    const mapProduct = useCallback((x: Product) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const mapProductStatus = useCallback((x: ProductStatus) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const mapProductCategory = useCallback((x: ProductCategory) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const mapProductAttribute = useCallback((x: ProductAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const getProducts = useCallback(async () => {
        const response = await productClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setProducts(response.products ?? [])
    }, [])

    const getStatuses = useCallback(async () => {
        const response = await productStatusesClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setStatuses(response.statuses ?? [])
    }, [])

    const getCategories = useCallback(async () => {
        const response = await productCategoriesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setCategories(response.categories ?? [])
    }, [])

    const getAttributes = useCallback(async () => {
        const response = await productAttributesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(response.attributes ?? [])
    }, [])

    const getActualProducts = useCallback(
        () => [{ value: '', text: 'Не выбрано' }, ...products.filter(x => !x.isDeleted).map(mapProduct)],
        [mapProduct, products]
    )

    const getAllProducts = useCallback(() => products.map(mapProduct), [mapProduct, products])

    const getActualStatuses = useCallback(() => statuses.filter(x => !x.isDeleted).map(mapProductStatus), [
        mapProductStatus,
        statuses
    ])

    const getAllStatuses = useCallback(() => statuses.map(mapProductStatus), [mapProductStatus, statuses])

    const getActualCategories = useCallback(() => categories.filter(x => !x.isDeleted).map(mapProductCategory), [
        categories,
        mapProductCategory
    ])

    const getAllCategories = useCallback(() => categories.map(mapProductCategory), [categories, mapProductCategory])

    const getActualAttributes = useCallback(() => attributes.filter(x => !x.isDeleted).map(mapProductAttribute), [
        attributes,
        mapProductAttribute
    ])

    const getAllAttributes = useCallback(() => attributes.map(mapProductAttribute), [attributes, mapProductAttribute])

    useEffect(() => {
        void getProducts()
        void getStatuses()
        void getCategories()
        void getAttributes()
    }, [getAttributes, getCategories, getProducts, getStatuses])

    return {
        getActualProducts,
        getAllProducts,
        getActualStatuses,
        getAllStatuses,
        getActualCategories,
        getAllCategories,
        getActualAttributes,
        getAllAttributes
    }
}

export default useProductsSelectOptions
