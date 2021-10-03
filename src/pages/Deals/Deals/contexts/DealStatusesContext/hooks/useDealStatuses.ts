import DealStatusesState, { dealStatusesInitialState } from '../../../states/DealStatusesState'
import { useCallback, useEffect, useState } from 'react'

import DealStatusesClient from '../../../../../../../api/orders/clients/DealStatusesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const dealStatusesClient = new DealStatusesClient(HttpClientFactory.Api)

const useDealStatuses = (): DealStatusesState => {
    const MaxLimit = 2147483647

    const [isLoading, setIsLoading] = useState(dealStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(dealStatusesInitialState.statuses)

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await dealStatusesClient.GetPagedListAsync({
            isDeleted: false,
            limit: MaxLimit,
            offset: 0,
            sortBy: 'IsFinish',
            orderBy: 'asc'
        })

        setStatuses(response.statuses ?? [])

        setIsLoading(false)
    }, [])

    useEffect(() => {
        void getAll()
    }, [getAll])

    return { isLoading, statuses, getAll }
}

export default useDealStatuses
