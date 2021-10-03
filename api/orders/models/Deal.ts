import DealAttributeLink from './DealAttributeLink'
import DealPosition from './DealPosition'
import DealStatus from './DealStatus'
import DealType from './DealType'

export default interface Deal {
    id?: string
    accountId?: string
    typeId?: string
    statusId?: string
    companyId?: string
    contactId?: string
    createUserId?: string
    responsibleUserId?: string
    name?: string
    startDateTime?: string
    endDateTime?: string
    sum: number
    sumWithoutDiscount: number
    finishProbability: number
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    type?: DealType
    status?: DealStatus
    positions?: DealPosition[]
    attributeLinks?: DealAttributeLink[]
}
