/* eslint-disable */

import DealType from '../models/DealType'
import DealStatus from '../models/DealStatus'
import DealPosition from '../models/DealPosition'
import DealAttributeLink from '../models/DealAttributeLink'

export default interface Deal {
    id: string
    accountId: string
    typeId: string
    statusId: string
    companyId?: string
    contactId?: string
    createUserId: string
    responsibleUserId?: string
    name?: string
    startDateTime: string
    endDateTime?: string
    sum: number
    sumWithoutDiscount: number
    finishProbability: number
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
    type: DealType
    status: DealStatus
    positions?: DealPosition[]
    attributeLinks?: DealAttributeLink[]
}
