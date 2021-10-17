import OrderAttributeLink from './OrderAttributeLink'
import OrderItem from './OrderItem'
import OrderStatus from './OrderStatus'
import OrderType from './OrderType'

export default interface Order {
    id?: string
    accountId?: string
    typeId?: string
    statusId?: string
    createUserId?: string
    responsibleUserId?: string
    customerId?: string
    name?: string
    startDateTime?: string
    endDateTime?: string
    sum: number
    sumWithoutDiscount: number
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    type?: OrderType
    status?: OrderStatus
    items?: OrderItem[]
    attributeLinks?: OrderAttributeLink[]
}
