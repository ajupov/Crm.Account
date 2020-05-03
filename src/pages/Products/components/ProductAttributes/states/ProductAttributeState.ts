import AttributeType from '../../../../../../api/products/models/AttributeType'
import ProductAttribute from '../../../../../../api/products/models/ProductAttribute'

export interface ProductAttributeState {
    isLoading: boolean
    attribute: ProductAttribute
    setAttribute: (Attribute: ProductAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const productAttributeInitialState: ProductAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: AttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: ProductAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
