export default interface CustomerGetPagedListRequest {
    surname?: string
    name?: string
    patronymic?: string
    phone?: string
    email?: string
    minBirthDate?: string
    maxBirthDate?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    allAttributes?: boolean
    attributes?: { [key: string]: string }
    sourceIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
