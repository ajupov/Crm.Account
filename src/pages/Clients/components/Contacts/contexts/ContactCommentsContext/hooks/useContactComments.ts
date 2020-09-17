import ContactCommentsState, { contactCommentsInitialState } from '../../../states/ContactCommentsState'
import { useCallback, useEffect, useState } from 'react'

import ContactCommentsClient from '../../../../../../../../api/contacts/clients/ContactCommentsClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const contactCommentsClient = new ContactCommentsClient(HttpClientFactoryInstance.Api)

// function merge(first: ContactComment[], second: ContactComment[]): ContactComment[] {
//     return [...new Set([...first, ...second])]
//         .map(x => (x.createDateTime ? { key: new Date(x.createDateTime).getTime(), value: x } : null))
//         .sort((x, y) => x!.key - y!.key)
//         .flatMap(x => x!.value)
// }

const useContactComments = (): ContactCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(contactCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(contactCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(contactCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(contactCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(contactCommentsInitialState.comments)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await contactCommentsClient.GetPagedListAsync({ ...request, contactId: id })

        if (response?.comments?.length) {
            for (const iterator of response?.comments) {
                if (!comments.some(x => x.id === iterator.id)) {
                    comments.push(iterator)
                }
            }

            // setComments(merge(comments, response.comments))
            setComments(comments)
        }

        setIsLoading(false)
    }, [comments, id, request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return {
        request,
        setRequest,
        isNeedLoadingBefore,
        setIsNeedLoadingBefore,
        isNeedLoadingAfter,
        setIsNeedLoadingAfter,
        isLoading,
        comments,
        getPagedList
    }
}

export default useContactComments
