import Product from '../../../../../../api/products/models/Product'
import ProductType from '../../../../../../api/products/models/ProductType'

export interface ProductState {
    isLoading: boolean
    product: Product
    setProduct: (product: Product) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const productInitialState: ProductState = {
    isLoading: false,
    product: {
        id: void 0,
        accountId: void 0,
        parentProductId: void 0,
        type: ProductType.Material,
        statusId: void 0,
        name: void 0,
        vendorCode: void 0,
        price: 0,
        image: void 0,
        isHidden: false,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        status: {
            id: void 0,
            accountId: void 0,
            name: void 0,
            isDeleted: false,
            createDateTime: void 0,
            modifyDateTime: void 0
        },
        attributeLinks: [],
        categoryLinks: []
    },
    setProduct: (_: Product) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
