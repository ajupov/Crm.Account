import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../../api/products/models/ProductCategory'
import ProductCategoryLink from '../../../../../../../api/products/models/ProductCategoryLink'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

interface UseProductCategoriesReturn {
    productCategoriesAsOptions?: DropdownItemProps[]
}

const useProductCategories = (ids: ProductCategoryLink[]): UseProductCategoriesReturn => {
    const [categories, setCategories] = useState<ProductCategory[]>([])

    const get = useCallback(async () => {
        if (!ids || !ids.length) {
            return
        }

        const filtered = ids.map(x => x.productCategoryId as string)
        const response = await productCategoriesClient.GetListAsync(filtered)

        setCategories(response)
    }, [ids])

    useEffect(() => {
        void get()
    }, [get])

    const mapCategory = useCallback((x: ProductCategory) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const categoriesAsOptions = useMemo(() => categories.map(mapCategory), [categories, mapCategory])

    return { productCategoriesAsOptions: categoriesAsOptions }
}

export default useProductCategories
