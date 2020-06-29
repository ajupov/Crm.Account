import ActivityAttribute from '../models/ActivityAttribute'

export default interface ActivityAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: ActivityAttribute[]
}
