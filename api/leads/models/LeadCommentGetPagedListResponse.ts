/* eslint-disable */

import LeadComment from '../models/LeadComment'

export default interface LeadCommentGetPagedListResponse {
    totalCount: number
    comments?: LeadComment[]
}
