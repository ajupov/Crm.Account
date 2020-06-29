import Activity from '../models/Activity'

export default interface ActivityGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    activities?: Activity[]
}
