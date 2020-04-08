/* eslint-disable */

import ActivityStatus from '../models/ActivityStatus'

export default interface ActivityStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: ActivityStatus[]
}
