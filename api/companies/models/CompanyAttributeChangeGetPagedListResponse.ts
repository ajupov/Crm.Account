/* eslint-disable */

import CompanyAttributeChange from '../models/CompanyAttributeChange'

export default interface CompanyAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: CompanyAttributeChange[]
}
