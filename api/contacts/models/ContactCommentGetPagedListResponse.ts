/* eslint-disable */

import ContactComment from '../models/ContactComment'

export default interface ContactCommentGetPagedListResponse {
    totalCount: number
    comments?: ContactComment[]
}
