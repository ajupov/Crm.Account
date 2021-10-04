import CustomerComment from '../../../../../api/customers/models/CustomerComment'

export default interface CustomerCommentState {
    isLoading: boolean
    comment: CustomerComment
    setComment: (comment: CustomerComment) => void
    create: () => Promise<void>
}

export const customerCommentInitialState: CustomerCommentState = {
    isLoading: false,
    comment: {
        id: void 0,
        value: void 0
    },
    setComment: (_: CustomerComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
