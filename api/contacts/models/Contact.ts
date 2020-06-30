import ContactAttributeLink from '../models/ContactAttributeLink'
import ContactBankAccount from '../models/ContactBankAccount'

export default interface Contact {
    id?: string
    accountId?: string
    leadId?: string
    companyId?: string
    createUserId?: string
    responsibleUserId?: string
    surname?: string
    name?: string
    patronymic?: string
    phone?: string
    email?: string
    taxNumber?: string
    post?: string
    postcode?: string
    country?: string
    region?: string
    province?: string
    city?: string
    street?: string
    house?: string
    apartment?: string
    birthDate?: string
    photo?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    bankAccounts?: ContactBankAccount[]
    attributeLinks?: ContactAttributeLink[]
}
