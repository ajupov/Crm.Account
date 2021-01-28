import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../../api/products/models/ProductCategory'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

interface UseProductCategoriesLoadReturn {
    categoriesAsOptions: DropdownItemProps[]
}

const useProductCategoriesLoad = (): UseProductCategoriesLoadReturn => {
    const MaxLimit = 2147483647

    const [categories, setCategories] = useState<ProductCategory[]>([])

    const loadCategories = useCallback(async () => {
        const response = await productCategoriesClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setCategories(response.categories ?? [])
    }, [])

    useEffect(() => {
        void loadCategories()
    }, [loadCategories])

    const map = useCallback((x: ProductCategory) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const categoriesAsOptions = useMemo(() => categories.filter(x => !x.isDeleted).map(map), [categories, map])

    return { categoriesAsOptions }
}

export default useProductCategoriesLoad
