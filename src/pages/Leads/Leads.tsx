import { Dropdown, DropdownOnSearchChangeData } from 'semantic-ui-react'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'

import HttpClientFactoryInstance from '../../utils/httpClientFactory/HttpClientFactoryInstance'
import Product from '../../../api/products/models/Product'
import ProductsClient from '../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)

const Leads: FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        document.title = 'Лиды'
    })

    const load = useCallback(async (value?: string) => {
        setIsLoading(true)

        const response = await productsClient.GetPagedListAsync({
            isDeleted: false,
            name: value,
            offset: 0,
            limit: 10
        })

        setProducts(response.products ?? [])
        setIsLoading(false)
    }, [])

    const onSearchChange = useCallback((_, data: DropdownOnSearchChangeData) => load(data.searchQuery), [load])

    const onOpen = useCallback(async () => load(), [load])

    const options = useMemo(
        () =>
            products?.map(x => ({
                key: x.id,
                value: x.id,
                text: x.name
            })),
        [products]
    )

    return (
        <>
            <h1>Лиды</h1>
            <Dropdown
                search
                clearable
                selection
                loading={isLoading}
                options={options}
                onOpen={onOpen}
                onSearchChange={onSearchChange}
                noResultsMessage="Не найдено"
            />
        </>
    )
}

export default Leads
