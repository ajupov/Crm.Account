import CustomerAttribute from './CustomerAttribute'

export default interface CustomerAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: CustomerAttribute[]
}
