import ContactComment from '../../../../../../api/contacts/models/ContactComment'

export default interface ContactCommentState {
    isLoading: boolean
    comment: ContactComment
    setComment: (comment: ContactComment) => void
    create: () => Promise<void>
}

export const contactCommentInitialState: ContactCommentState = {
    isLoading: false,
    comment: {
        id: void 0,
        value: void 0
    },
    setComment: (_: ContactComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
