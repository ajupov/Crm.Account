import SupplierCommentState, { supplierCommentInitialState } from '../../../states/SupplierCommentState'
import { useCallback, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierCommentsClient from '../../../../../../../api/suppliers/clients/SupplierCommentsClient'
import { useParams } from 'react-router'

const supplierCommentsClient = new SupplierCommentsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierComment = (): SupplierCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(supplierCommentInitialState.isLoading)
    const [comment, setComment] = useState(supplierCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await supplierCommentsClient.CreateAsync({ ...{ ...comment, id: Guid.create().toString() }, supplierId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useSupplierComment
