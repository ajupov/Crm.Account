import TableData, { DefaultLimit } from '../../../../components/table/TableData'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'
import { calculateOffset } from '../../../../utils/pagination/paginationUtils'

interface UseProductCategoriesReturn extends TableData {
    isLoading: boolean
    categories?: ProductCategory[]
}

const useProductCategories = (request?: ProductCategoryGetPagedListRequest): UseProductCategoriesReturn => {
    const client = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<ProductCategory[] | undefined>([])
    const [limit] = useState<number>(DefaultLimit)
    const [total, setTotal] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string>('')

    const load = useCallback(async () => {
        setIsLoading(true)

        const response = await client.GetPagedListAsync({
            name: request?.name,
            isDeleted: request?.isDeleted ?? false,
            minCreateDate: request?.minCreateDate,
            maxCreateDate: request?.maxCreateDate,
            minModifyDate: request?.minModifyDate,
            maxModifyDate: request?.maxModifyDate,
            offset,
            limit,
            sortBy: request?.sortBy,
            orderBy: request?.orderBy
        })

        setCategories(response.categories)
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [client, limit, offset, request])

    const onChangePage = useCallback((page: number): void => setOffset(calculateOffset(page, limit)), [limit])

    useEffect(() => {
        load()
    }, [load])

    return { isLoading, categories, limit, total, lastModifyDateTime, onChangePage }
}

export default useProductCategories
