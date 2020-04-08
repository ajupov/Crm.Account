/* eslint-disable */

import ActivityTypeChange from '../models/ActivityTypeChange'

export default interface ActivityTypeChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityTypeChange[]
}
