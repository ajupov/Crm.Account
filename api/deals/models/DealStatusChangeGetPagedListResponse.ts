/* eslint-disable */

import DealStatusChange from '../models/DealStatusChange'

export default interface DealStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: DealStatusChange[]
}
