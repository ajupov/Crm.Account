import ContactAttributeChangesState, {
    contactAttributeChangesInitialState
} from '../../../states/ContactAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import ContactAttributeChangesClient from '../../../../../../../../api/contacts/clients/ContactAttributeChangesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const contactAttributeChangesClient = new ContactAttributeChangesClient(HttpClientFactoryInstance.Api)

const useContactAttributeChanges = (): ContactAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(contactAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(contactAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(contactAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(contactAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactAttributeChangesClient.GetPagedListAsync({
            ...request,
            attributeId: id,
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
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useContactAttributeChanges
