/* eslint-disable */

import LeadAttributeChange from '../models/LeadAttributeChange'

export default interface LeadAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: LeadAttributeChange[]
}
