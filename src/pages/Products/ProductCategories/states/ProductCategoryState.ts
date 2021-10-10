import { Guid } from 'guid-typescript'
import ProductCategory from '../../../../../api/products/models/ProductCategory'

export interface ProductCategoryState {
    isLoading: boolean
    category: ProductCategory
    setCategory: (category: ProductCategory) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const productCategoryInitialState: ProductCategoryState = {
    isLoading: false,
    category: {
        id: Guid.create().toString(),
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setCategory: (_: ProductCategory) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
