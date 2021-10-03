import { ContactAttributeState, contactAttributeInitialState } from '../../../states/ContactAttributeState'
import { useCallback, useEffect, useState } from 'react'

import ContactAttributesClient from '../../../../../../../../api/contacts/clients/ContactAttributesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const contactAttributesClient = new ContactAttributesClient(HttpClientFactory.Api)

const useContactAttribute = (): ContactAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(contactAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(contactAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await contactAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await contactAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useContactAttribute
