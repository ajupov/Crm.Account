import Company from '../models/Company'

export default interface CompanyGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    companies?: Company[]
}
