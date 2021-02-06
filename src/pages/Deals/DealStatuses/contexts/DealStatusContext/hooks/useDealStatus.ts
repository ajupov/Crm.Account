import { DealStatusState, dealStatusInitialState } from '../../../states/DealStatusState'
import { useCallback, useEffect, useState } from 'react'

import DealStatusesClient from '../../../../../../../api/deals/clients/DealStatusesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const dealStatusesClient = new DealStatusesClient(HttpClientFactoryInstance.Api)

const useDealStatus = (): DealStatusState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(dealStatusInitialState.isLoading)
    const [status, setStatus] = useState(dealStatusInitialState.status)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealStatusesClient.GetAsync(id)

        setStatus(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await dealStatusesClient.CreateAsync(status)

        setIsLoading(false)
    }, [status])

    const update = useCallback(async () => {
        setIsLoading(true)

        await dealStatusesClient.UpdateAsync(status)

        setIsLoading(false)
    }, [status])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, status, setStatus, create, update }
}

export default useDealStatus
