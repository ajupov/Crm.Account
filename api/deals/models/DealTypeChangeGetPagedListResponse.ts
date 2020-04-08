/* eslint-disable */

import DealTypeChange from '../models/DealTypeChange'

export default interface DealTypeChangeGetPagedListResponse {
    totalCount: number
    changes?: DealTypeChange[]
}
