import OrderComment from '../../../../../api/orders/models/OrderComment'

export default interface OrderCommentState {
    isLoading: boolean
    comment: OrderComment
    setComment: (comment: OrderComment) => void
    create: () => Promise<void>
}

export const orderCommentInitialState: OrderCommentState = {
    isLoading: false,
    comment: {
        id: void 0,
        value: void 0
    },
    setComment: (_: OrderComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
