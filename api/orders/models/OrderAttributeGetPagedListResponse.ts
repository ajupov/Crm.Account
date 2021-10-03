import OrderAttribute from './OrderAttribute'

export default interface OrderAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: OrderAttribute[]
}
