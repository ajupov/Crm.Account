export default interface ContactGetPagedListRequest {
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
    minBirthDate?: string
    maxBirthDate?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    allAttributes?: boolean
    attributes?: { [key: string]: string }
    bankAccountNumber?: string
    bankAccountBankNumber?: string
    bankAccountBankCorrespondentNumber?: string
    bankAccountBankName?: string
    leadIds?: string[]
    companyIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
