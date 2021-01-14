import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../../api/products/models/ProductCategory'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

interface UseProductCategoriesAutocompleteOptionsReturn {
    loadActualCategories: (value?: string) => Promise<void>
    actualCategoriesAsOptions: DropdownItemProps[]
}

const useProductCategoriesAutocompleteOptions = (): UseProductCategoriesAutocompleteOptionsReturn => {
    const MaxLimit = 10

    const [categories, setCategories] = useState<ProductCategory[]>([])

    const loadActualCategories = useCallback(async () => {
        const response = await productCategoriesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setCategories(response.categories ?? [])
    }, [])

    const mapCategory = useCallback((x: ProductCategory) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const actualCategoriesAsOptions = useMemo(() => categories.map(mapCategory), [categories, mapCategory])

    return { loadActualCategories, actualCategoriesAsOptions }
}

export default useProductCategoriesAutocompleteOptions
