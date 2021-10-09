import ProductStatus from '../../../../../api/products/models/ProductStatus'

export interface ProductStatusState {
    isLoading: boolean
    status: ProductStatus
    setStatus: (Status: ProductStatus) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const productStatusInitialState: ProductStatusState = {
    isLoading: false,
    status: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setStatus: (_: ProductStatus) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
