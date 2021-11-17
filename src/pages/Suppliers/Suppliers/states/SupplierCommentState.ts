import SupplierComment from '../../../../../api/suppliers/models/SupplierComment'

export default interface SupplierCommentState {
    isLoading: boolean
    comment: SupplierComment
    setComment: (comment: SupplierComment) => void
    create: () => Promise<void>
}

export const supplierCommentInitialState: SupplierCommentState = {
    isLoading: false,
    comment: {
        id: void 0,
        value: void 0
    },
    setComment: (_: SupplierComment) => Promise.resolve(void 0),
    create: () => Promise.resolve(void 0)
}
