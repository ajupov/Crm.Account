import Supplier from '../../../../../api/suppliers/models/Supplier'
import SupplierAttribute from '../../../../../api/suppliers/models/SupplierAttribute'

export interface SupplierState {
    isLoading: boolean
    supplier: Supplier
    attributes: SupplierAttribute[]
    setSupplier: (supplier: Supplier) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const supplierInitialState: SupplierState = {
    isLoading: false,
    supplier: {
        id: void 0,
        accountId: void 0,
        createUserId: void 0,
        name: void 0,
        phone: void 0,
        email: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        attributeLinks: []
    },
    attributes: [],
    setSupplier: (_: Supplier) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
