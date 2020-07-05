import ContactChangesState, { contactChangesInitialState } from '../../../states/ContactChangesState'
import { useCallback, useEffect, useState } from 'react'

import ContactChangesClient from '../../../../../../../../api/contacts/clients/ContactChangesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const contactChangesClient = new ContactChangesClient(HttpClientFactoryInstance.Api)

const useContactChanges = (): ContactChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(contactChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(contactChangesInitialState.isLoading)
    const [changes, setChanges] = useState(contactChangesInitialState.changes)
    const [total, setTotal] = useState(contactChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactChangesClient.GetPagedListAsync({ ...request, contactId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactChangesClient.GetPagedListAsync({
            ...request,
            contactId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useContactChanges
