import TableData, { DefaultLimit, OrderBy } from '../../../../components/table/TableData'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'
import { calculateOffset } from '../../../../helpers/paginationHelper'

interface UseProductCategoriesReturn extends TableData {
    isLoading: boolean
    categories?: ProductCategory[]
}

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategories = (request?: ProductCategoryGetPagedListRequest): UseProductCategoriesReturn => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<ProductCategory[] | undefined>([])
    const [limit] = useState<number>(DefaultLimit)
    const [total, setTotal] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string>('')

    const [sortBy, setSortBy] = useState<string | undefined>('CreateDateTime')
    const [orderBy, setOrderBy] = useState<OrderBy>('desc')

    const load = useCallback(async () => {
        setIsLoading(true)

        const response = await productCategoriesClient.GetPagedListAsync({
            name: request?.name,
            isDeleted: request?.isDeleted ?? false,
            minCreateDate: request?.minCreateDate,
            maxCreateDate: request?.maxCreateDate,
            minModifyDate: request?.minModifyDate,
            maxModifyDate: request?.maxModifyDate,
            offset,
            limit,
            sortBy,
            orderBy
        })

        setCategories(response.categories)
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [limit, offset, orderBy, request, sortBy])

    const onChangePage = useCallback((page: number): void => setOffset(calculateOffset(page, limit)), [limit])

    useEffect(() => {
        load()
    }, [load])

    return {
        isLoading,
        categories,
        limit,
        total,
        lastModifyDateTime,
        onChangePage,
        sortBy,
        setSortBy,
        orderBy,
        setOrderBy
    }
}

export default useProductCategories
