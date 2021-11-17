import SupplierAttribute from '../../../../../api/suppliers/models/SupplierAttribute'
import SupplierAttributeType from '../../../../../api/suppliers/models/SupplierAttributeType'

export interface SupplierAttributeState {
    isLoading: boolean
    attribute: SupplierAttribute
    setAttribute: (attribute: SupplierAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const supplierAttributeInitialState: SupplierAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: SupplierAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: SupplierAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
