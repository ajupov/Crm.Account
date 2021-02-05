import { LeadAttributeState, leadAttributeInitialState } from '../../../states/LeadAttributeState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadAttributesClient from '../../../../../../../../api/leads/clients/LeadAttributesClient'
import { useParams } from 'react-router'

const leadAttributesClient = new LeadAttributesClient(HttpClientFactoryInstance.Api)

const useLeadAttribute = (): LeadAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(leadAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(leadAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await leadAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await leadAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useLeadAttribute
