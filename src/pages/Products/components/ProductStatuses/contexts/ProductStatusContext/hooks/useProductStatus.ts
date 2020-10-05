import { ProductStatusState, productStatusInitialState } from '../../../states/ProductStatusState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductStatusesClient from '../../../../../../../../api/products/clients/ProductStatusesClient'
import { useParams } from 'react-router'

const productStatusesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)

const useProductStatus = (): ProductStatusState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(productStatusInitialState.isLoading)
    const [status, setStatus] = useState(productStatusInitialState.status)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productStatusesClient.GetAsync(id)

        setStatus(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await productStatusesClient.CreateAsync(status)

        setIsLoading(false)
    }, [status])

    const update = useCallback(async () => {
        setIsLoading(true)

        await productStatusesClient.UpdateAsync(status)

        setIsLoading(false)
    }, [status])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, status, setStatus, create, update }
}

export default useProductStatus
