import CompanyComment from '../../../../../../api/companies/models/CompanyComment'

export default interface CompanyCommentState {
    isLoading: boolean
    comment: CompanyComment
    setComment: (comment: CompanyComment) => void
    create: () => Promise<void>
}

export const companyCommentInitialState: CompanyCommentState = {
    isLoading: false,
    comment: {
        id: void 0,
        value: void 0
    },
    setComment: (_: CompanyComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
