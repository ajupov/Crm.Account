import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductStatus from '../../../../../../../api/products/models/ProductStatus'
import ProductStatusesClient from '../../../../../../../api/products/clients/ProductStatusesClient'

const productStatuesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)

interface UseProductStatusReturn {
    productStatusName: string
}

const useProductStatus = (id?: string): UseProductStatusReturn => {
    const [status, setStatus] = useState<ProductStatus>()

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await productStatuesClient.GetAsync(id)

        setStatus(response)
    }, [id])

    useEffect(() => {
        void get()
    }, [get])

    return { productStatusName: status?.name ?? '' }
}

export default useProductStatus
