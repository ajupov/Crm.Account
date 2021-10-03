import { ContactState, contactInitialState } from '../../../states/ContactState'
import { useCallback, useEffect, useState } from 'react'

import ContactAttributesClient from '../../../../../../../../api/contacts/clients/ContactAttributesClient'
import ContactsClient from '../../../../../../../../api/contacts/clients/ContactsClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { contactAttributesInitialState } from '../../../../ContactAttributes/states/ContactAttributesState'
import { useParams } from 'react-router'

const contactsClient = new ContactsClient(HttpClientFactory.Api)
const contactAttributesClient = new ContactAttributesClient(HttpClientFactory.Api)

const useContact = (): ContactState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(contactInitialState.isLoading)
    const [contact, setContact] = useState(contactInitialState.contact)
    const [attributes, setAttributes] = useState(contactAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactsClient.GetAsync(id)

        setContact(response)

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.contactAttributeId).filter(x => x) as string[]

            const attributes = await contactAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
        }

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await contactsClient.CreateAsync(contact)

        setIsLoading(false)
    }, [contact])

    const update = useCallback(async () => {
        setIsLoading(true)

        await contactsClient.UpdateAsync(contact)

        setIsLoading(false)
    }, [contact])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, contact, setContact, attributes, create, update }
}

export default useContact
