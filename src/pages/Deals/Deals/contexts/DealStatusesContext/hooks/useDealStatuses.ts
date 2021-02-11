import DealStatusesState, { dealStatusesInitialState } from '../../../states/DealStatusesState'
import { useCallback, useEffect, useState } from 'react'

import DealStatusesClient from '../../../../../../../api/deals/clients/DealStatusesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealStatusesClient = new DealStatusesClient(HttpClientFactoryInstance.Api)

const useDealStatuses = (): DealStatusesState => {
    const MaxLimit = 5

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
