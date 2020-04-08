/* eslint-disable */

import Lead from '../models/Lead'

export default interface LeadGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    leads?: Lead[]
}
