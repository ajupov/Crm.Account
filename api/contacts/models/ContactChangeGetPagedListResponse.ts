/* eslint-disable */

import ContactChange from '../models/ContactChange'

export default interface ContactChangeGetPagedListResponse {
    totalCount: number
    changes?: ContactChange[]
}
