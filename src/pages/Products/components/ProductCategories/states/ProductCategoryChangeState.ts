import ProductCategoryChange from '../../../../../../api/products/models/ProductCategoryChange'

export interface ProductCategoryChangeState {
    change: ProductCategoryChange
    setChange: (category: ProductCategoryChange) => void
}

export const productCategoryChangeInitialState: ProductCategoryChangeState = {
    change: {
        id: void 0,
        changerUserId: void 0,
        categoryId: void 0,
        createDateTime: void 0,
        oldValueJson: void 0,
        newValueJson: void 0
    },
    setChange: (_: ProductCategoryChange) => void 0
}
