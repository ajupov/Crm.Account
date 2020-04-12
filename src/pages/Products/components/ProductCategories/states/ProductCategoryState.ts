import ProductCategory from '../../../../../../api/products/models/ProductCategory'

export interface ProductCategoryState {
    isLoading: boolean
    category: ProductCategory
    setCategory: (category: ProductCategory) => void
    setIds: (ids: string[]) => void
    isDeleting: boolean
    setIsDeleting: (state: boolean) => void
    isRestoring: boolean
    setIsRestoring: (state: boolean) => void
    create: () => Promise<void>
    update: () => Promise<void>
    delete: () => Promise<void>
    restore: () => Promise<void>
}

export const productCategoryInitialState: ProductCategoryState = {
    isLoading: false,
    category: {
        id: '',
        accountId: '',
        name: '',
        isDeleted: false,
        createDateTime: '',
        modifyDateTime: void 0
    },
    setCategory: (_: ProductCategory) => void 0,
    setIds: (_: string[]) => void 0,
    isDeleting: false,
    setIsDeleting: (_: boolean) => void 0,
    isRestoring: false,
    setIsRestoring: (_: boolean) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0),
    delete: () => Promise.resolve(void 0),
    restore: () => Promise.resolve(void 0)
}
