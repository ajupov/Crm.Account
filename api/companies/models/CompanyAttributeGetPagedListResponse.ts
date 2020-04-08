/* eslint-disable */

import CompanyAttribute from '../models/CompanyAttribute'

export default interface CompanyAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: CompanyAttribute[]
}
