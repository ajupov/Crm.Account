/* eslint-disable */

import ActivityPriority from '../models/ActivityPriority'
import ActivityAttributeLink from '../models/ActivityAttributeLink'

export default interface Activity {
    id: string
    accountId: string
    typeId: string
    statusId: string
    leadId?: string
    companyId?: string
    contactId?: string
    dealId?: string
    createUserId: string
    responsibleUserId?: string
    name?: string
    description?: string
    result?: string
    priority: ActivityPriority
    startDateTime?: string
    endDateTime?: string
    deadLineDateTime?: string
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
    attributeLinks?: ActivityAttributeLink[]
}
