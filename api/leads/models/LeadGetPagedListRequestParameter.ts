/* eslint-disable */
export default interface LeadGetPagedListRequestParameter {
    accountId?: string
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
    minOpportunitySum?: number
    maxOpportunitySum?: number
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    allAttributes?: boolean
    attributes?: string[]
    sourceIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
