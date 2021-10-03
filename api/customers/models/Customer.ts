import CustomerAttributeLink from './CustomerAttributeLink'
import CustomerSource from './CustomerSource'

export default interface Customer {
    id?: string
    accountId?: string
    sourceId?: string
    createUserId?: string
    responsibleUserId?: string
    surname?: string
    name?: string
    patronymic?: string
    phone?: string
    email?: string
    birthDate?: string
    image?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    source?: CustomerSource
    attributeLinks?: CustomerAttributeLink[]
}
