import ActivityAttribute from './ActivityAttribute'

export default interface ActivityAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: ActivityAttribute[]
}
