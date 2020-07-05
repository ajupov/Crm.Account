import Contact from '../../../../../../api/contacts/models/Contact'
import ContactAttribute from '../../../../../../api/contacts/models/ContactAttribute'

export interface ContactState {
    isLoading: boolean
    contact: Contact
    attributes: ContactAttribute[]
    setContact: (contact: Contact) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const contactInitialState: ContactState = {
    isLoading: false,
    contact: {
        id: void 0,
        accountId: void 0,
        leadId: void 0,
        companyId: void 0,
        createUserId: void 0,
        responsibleUserId: void 0,
        surname: void 0,
        name: void 0,
        patronymic: void 0,
        phone: void 0,
        email: void 0,
        taxNumber: void 0,
        post: void 0,
        postcode: void 0,
        country: void 0,
        region: void 0,
        province: void 0,
        city: void 0,
        street: void 0,
        house: void 0,
        apartment: void 0,
        birthDate: void 0,
        photo: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        bankAccounts: [],
        attributeLinks: []
    },
    attributes: [],
    setContact: (_: Contact) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
