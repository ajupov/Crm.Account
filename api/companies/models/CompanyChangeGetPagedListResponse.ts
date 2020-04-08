/* eslint-disable */

import CompanyChange from '../models/CompanyChange'

export default interface CompanyChangeGetPagedListResponse {
    totalCount: number
    changes?: CompanyChange[]
}
