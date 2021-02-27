import DealsState, { dealsInitialState } from '../../../states/DealsState'
import { useCallback, useEffect, useState } from 'react'

import DealsClient from '../../../../../../../api/deals/clients/DealsClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealsClient = new DealsClient(HttpClientFactoryInstance.Api)

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
