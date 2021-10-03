import Activity from './Activity'

export default interface ActivityGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    activities?: Activity[]
}
