import LeadComment from '../../../../../../api/leads/models/LeadComment'

export default interface LeadCommentState {
    isLoading: boolean
    comment: LeadComment
    setComment: (comment: LeadComment) => void
    create: () => Promise<void>
}

export const leadCommentInitialState: LeadCommentState = {
    isLoading: false,
    comment: {
        id: void 0,
        value: void 0
    },
    setComment: (_: LeadComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
