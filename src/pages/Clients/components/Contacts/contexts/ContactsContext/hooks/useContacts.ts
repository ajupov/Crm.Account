import ContactsState, { conactsInitialState } from '../../../states/ContactsState'
import { useCallback, useEffect, useState } from 'react'

import ContactsClient from '../../../../../../../../api/contacts/clients/ContactsClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'

const contactsClient = new ContactsClient(HttpClientFactory.Api)

const useContacts = (): ContactsState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(conactsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactsInitialState.isLoading)
    const [contacts, setContacts] = useState(conactsInitialState.contacts)
    const [total, setTotal] = useState(conactsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(conactsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await contactsClient.GetPagedListAsync(request)

        setContacts(response.contacts ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await contactsClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.contacts) {
            response.contacts.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.responsibleUserId
                delete v.photo
                delete v.bankAccounts
                delete v.attributeLinks
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, contacts, total, lastModifyDateTime, getPagedList, getAll }
}

export default useContacts
