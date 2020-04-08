/* eslint-disable */

import LeadChange from '../models/LeadChange'

export default interface LeadChangeGetPagedListResponse {
    totalCount: number
    changes?: LeadChange[]
}
