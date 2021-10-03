import Customer from '../../../../../../api/customers/models/Customer'
import CustomerAttribute from '../../../../../../api/customers/models/CustomerAttribute'

export interface CustomerState {
    isLoading: boolean
    customer: Customer
    attributes: CustomerAttribute[]
    setCustomer: (customer: Customer) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const customerInitialState: CustomerState = {
    isLoading: false,
    customer: {
        id: void 0,
        accountId: void 0,
        sourceId: void 0,
        createUserId: void 0,
        responsibleUserId: void 0,
        surname: void 0,
        name: void 0,
        patronymic: void 0,
        phone: void 0,
        email: void 0,
        companyName: void 0,
        post: void 0,
        postcode: void 0,
        country: void 0,
        region: void 0,
        province: void 0,
        city: void 0,
        street: void 0,
        house: void 0,
        apartment: void 0,
        opportunitySum: 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        source: void 0,
        attributeLinks: []
    },
    attributes: [],
    setCustomer: (_: Customer) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
