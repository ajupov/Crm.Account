/* eslint-disable */

import LeadSource from '../models/LeadSource'
import LeadAttributeLink from '../models/LeadAttributeLink'

export default interface Lead {
    id: string
    accountId: string
    sourceId: string
    createUserId: string
    responsibleUserId?: string
    surname?: string
    name?: string
    patronymic?: string
    phone?: string
    email?: string
    companyName?: string
    post?: string
    postcode?: string
    country?: string
    region?: string
    province?: string
    city?: string
    street?: string
    house?: string
    apartment?: string
    opportunitySum: number
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
    source: LeadSource
    attributeLinks?: LeadAttributeLink[]
}
