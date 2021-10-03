import DealsState, { dealsInitialState } from '../../../states/DealsState'
import { useCallback, useEffect, useState } from 'react'

import DealsClient from '../../../../../../../api/orders/clients/DealsClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const dealsClient = new DealsClient(HttpClientFactory.Api)

const useDeals = (): DealsState => {
    const MaxLimit = 2147483647

    const [isLoading, setIsLoading] = useState(dealsInitialState.isLoading)
    const [deals, setDeals] = useState(dealsInitialState.deals)

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await dealsClient.GetPagedListAsync({
            isDeleted: false,
            limit: MaxLimit,
            offset: 0,
            sortBy: 'CreateDateTime',
            orderBy: 'desc'
        })

        setDeals(response.deals ?? [])

        setIsLoading(false)
    }, [])

    useEffect(() => {
        void getAll()
    }, [getAll])

    return { isLoading, deals, getAll }
}

export default useDeals
