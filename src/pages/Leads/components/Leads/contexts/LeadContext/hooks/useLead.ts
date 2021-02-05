import { LeadState, leadInitialState } from '../../../states/LeadState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadAttributesClient from '../../../../../../../../api/leads/clients/LeadAttributesClient'
import LeadsClient from '../../../../../../../../api/leads/clients/LeadsClient'
import { leadAttributesInitialState } from '../../../../LeadsAttributes/states/LeadAttributesState'
import { useParams } from 'react-router'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)
const leadAttributesClient = new LeadAttributesClient(HttpClientFactoryInstance.Api)

const useLead = (): LeadState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(leadInitialState.isLoading)
    const [lead, setLead] = useState(leadInitialState.lead)
    const [attributes, setAttributes] = useState(leadAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadsClient.GetAsync(id)

        setLead(response)

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.leadAttributeId).filter(x => x) as string[]

            const attributes = await leadAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
        }

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await leadsClient.CreateAsync(lead)

        setIsLoading(false)
    }, [lead])

    const update = useCallback(async () => {
        setIsLoading(true)

        await leadsClient.UpdateAsync(lead)

        setIsLoading(false)
    }, [lead])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, lead, setLead, attributes, create, update }
}

export default useLead
