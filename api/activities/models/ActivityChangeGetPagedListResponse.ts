/* eslint-disable */

import ActivityChange from '../models/ActivityChange'

export default interface ActivityChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityChange[]
}
