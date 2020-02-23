import { useCallback, useEffect, useState } from 'react'

import Create from '../../../utils/httpClient/Create'
import ProductCategoriesClient from '../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../api/products/models/ProductCategory'
import TableData from '../../../models/TableData'

const httpClientFactory = Create.HttpClientFactory.WithApiUrl().Build()
const productCategoriesClient = new ProductCategoriesClient(httpClientFactory)

const useProductCategoriesTableData = (offset: number, limit: number): TableData<ProductCategory> => {
    const [totalCount, setTotalCount] = useState<number>(0)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string>('')
    const [rows, setRows] = useState<ProductCategory[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loadCategories = useCallback(async (): Promise<void> => {
        setIsLoading(true)
        const response = await productCategoriesClient.GetPagedListAsync({ offset, limit, isDeleted: false })

        setTotalCount(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')
        setRows(response.categories ?? [])
        setIsLoading(false)
    }, [limit, offset])

    useEffect(() => {
        loadCategories()
    }, [loadCategories])

    return { isLoading, totalCount, lastModifyDateTime, rows }
}

export default useProductCategoriesTableData
