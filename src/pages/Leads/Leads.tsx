import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'

import Autocomplete from '../../components/common/fields/Autocomplete/Autocomplete'
import { DropdownProps } from 'semantic-ui-react'
import HttpClientFactoryInstance from '../../utils/httpClientFactory/HttpClientFactoryInstance'
import Product from '../../../api/products/models/Product'
import ProductsClient from '../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)

const Leads: FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        document.title = 'Лиды'
    })

    const load = useCallback(async (value?: string) => {
        const response = await productsClient.GetPagedListAsync({
            isDeleted: false,
            name: value,
            offset: 0,
            limit: 10
        })

        setProducts(response.products ?? [])
    }, [])

    const options = useMemo(
        () =>
            products.map(x => ({
                value: x.id ?? '',
                text: x.name ?? ''
            })),
        [products]
    )

    const onChange = useCallback(
        (_: any, data: DropdownProps) => {
            const product = products.find(x => x.id === data.value)

            setProduct(product)
        },
        [products]
    )

    return (
        <>
            <h1>Лиды</h1>
            <Autocomplete
                required
                label={'Афтокомплит'}
                load={load}
                options={options}
                onChange={onChange}
                value={product?.id}
                text={product?.name}
            />
        </>
    )
}

export default Leads
