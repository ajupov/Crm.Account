import { LeadSourceState, leadSourceInitialState } from '../../../states/LeadSourceState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadSourcesClient from '../../../../../../../../api/leads/clients/LeadSourcesClient'
import { useParams } from 'react-router'

const leadSourcesClient = new LeadSourcesClient(HttpClientFactoryInstance.Api)

const useLeadSource = (): LeadSourceState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(leadSourceInitialState.isLoading)
    const [source, setSource] = useState(leadSourceInitialState.source)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadSourcesClient.GetAsync(id)

        setSource(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await leadSourcesClient.CreateAsync(source)

        setIsLoading(false)
    }, [source])

    const update = useCallback(async () => {
        setIsLoading(true)

        await leadSourcesClient.UpdateAsync(source)

        setIsLoading(false)
    }, [source])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, source, setSource, create, update }
}

export default useLeadSource
