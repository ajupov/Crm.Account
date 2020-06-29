import ContactAttribute from '../models/ContactAttribute'

export default interface ContactAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: ContactAttribute[]
}
