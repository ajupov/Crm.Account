import ProductCategory from '../../../../../api/products/models/ProductCategory'

export interface ProductCategoryState {
    isLoading: boolean
    category: ProductCategory
    setCategory: (category: ProductCategory) => void
    save: () => void
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
    save: () => void 0
}
