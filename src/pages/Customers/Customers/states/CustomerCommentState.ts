import CustomerComment from '../../../../../api/customers/models/CustomerComment'
import { Guid } from 'guid-typescript'

export default interface CustomerCommentState {
    isLoading: boolean
    comment: CustomerComment
    setComment: (comment: CustomerComment) => void
    create: () => Promise<void>
}

export const customerCommentInitialState: CustomerCommentState = {
    isLoading: false,
    comment: {
        id: Guid.create().toString(),
        value: void 0
    },
    setComment: (_: CustomerComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
